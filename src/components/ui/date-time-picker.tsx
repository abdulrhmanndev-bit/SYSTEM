"use client";

import { useState } from "react";
import { CalendarClock, Clock3 } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DatePickerProps, parseDate } from "./date-picker";

const pad = (value: number) => String(value).padStart(2, "0");

const formatDate = (date: Date) =>
  `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;

const formatTime = (date: Date) =>
  `${pad(date.getHours())}:${pad(date.getMinutes())}`;

const formatDateTime = (date: Date) =>
  `${formatDate(date)} ${formatTime(date)}`;

const normalizeDigits = (value: string) =>
  value
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)));

function parseDateTime(value: string): Date | undefined {
  const input = normalizeDigits(value.trim());
  const match = /^(.+?)\s+(\d{1,2}):(\d{2})$/.exec(input);

  if (!match) return;

  const date = parseDate(match[1]);
  const hours = Number(match[2]);
  const minutes = Number(match[3]);

  if (!date || hours > 23 || minutes > 59) return;

  date.setHours(hours, minutes, 0, 0);

  return date;
}

const startOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export function DateTimePicker({
  value,
  defaultValue,
  onChange,
  minDate,
  maxDate,
  minuteStep = 1,
  labels,
  className,
  placeholder = "DD/MM/YYYY HH:mm",
  disabled,
  onBlur,
  onKeyDown,
  dir,
  ...props
}: DatePickerProps) {
  const controlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<Date | null | undefined>(
    defaultValue,
  );

  const selected = controlled ? value : internalValue;

  const [draft, setDraft] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(selected ?? maxDate ?? new Date());

  const [time, setTime] = useState(formatTime(selected ?? new Date()));

  const text = draft ?? (selected ? formatDateTime(selected) : "");

  const inRange = (date: Date) =>
    (!minDate || date >= minDate) && (!maxDate || date <= maxDate);

  const parsed = parseDateTime(text);
  const validDate = parsed && inRange(parsed) ? parsed : undefined;

  const update = (date?: Date) => {
    if (!controlled) setInternalValue(date);

    setDraft(null);

    if (date) {
      setMonth(date);
      setTime(formatTime(date));
    }

    onChange?.(date);
  };

  const handleInput = (text: string) => {
    setDraft(text);

    const date = parseDateTime(text);
    const next = date && inRange(date) ? date : undefined;

    if (!controlled) setInternalValue(next);

    if (next) {
      setMonth(next);
      setTime(formatTime(next));
    }

    onChange?.(next);
  };

  const normalize = () => {
    if (!validDate) return;

    if (!controlled) setInternalValue(validDate);

    setDraft(null);
  };

  const handleDaySelect = (day?: Date) => {
    if (!day) return update();

    const [hours, minutes] = time.split(":").map(Number);
    day.setHours(hours, minutes, 0, 0);

    if (inRange(day)) update(day);
  };

  const handleTimeChange = (value: string) => {
    setTime(value);

    if (!selected || !/^\d{2}:\d{2}$/.test(value)) return;

    const [hours, minutes] = value.split(":").map(Number);
    const date = new Date(selected);

    date.setHours(hours, minutes, 0, 0);

    if (inRange(date)) update(date);
  };

  const today = new Date();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="relative w-full" dir={dir}>
        <Input
          {...props}
          type="text"
          inputMode="numeric"
          dir="ltr"
          disabled={disabled}
          placeholder={placeholder}
          value={text}
          aria-invalid={Boolean(text.trim() && !validDate)}
          className={cn("text-start ltr:pr-10 rtl:pl-10", className)}
          onChange={(event) => handleInput(event.target.value)}
          onBlur={(event) => {
            normalize();
            onBlur?.(event);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              normalize();
              event.currentTarget.blur();
            }
            onKeyDown?.(event);
          }}
        />

        <PopoverTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon"
              disabled={disabled}
              aria-label={labels?.openCalendar ?? "Open calendar"}
              className="absolute inset-e-1 top-1/2 size-8 -translate-y-1/2 text-text-disabled hover:bg-transparent hover:text-text-primary"
            >
              <CalendarClock aria-hidden className="size-4" />
            </Button>
          }
        />
      </div>

      <PopoverContent
        align="start"
        className="w-max max-w-[calc(100vw-2rem)] gap-0 overflow-hidden p-0"
      >
        <Calendar
          mode="single"
          selected={validDate}
          month={month}
          onMonthChange={setMonth}
          captionLayout="dropdown"
          startMonth={minDate}
          endMonth={maxDate}
          disabled={(day) => {
            const start = startOfDay(day);
            const end = new Date(start);
            end.setDate(end.getDate() + 1);

            return (
              (minDate && end <= minDate) ||
              (maxDate && start > maxDate) ||
              false
            );
          }}
          onSelect={handleDaySelect}
          className="w-full"
        />

        <div className="flex items-center gap-3 border-t border-border px-3 py-2">
          <Clock3 aria-hidden className="size-4 text-text-disabled" />

          <span className="text-xs text-text-secondary">
            {labels?.time ?? "Time"}
          </span>

          <Input
            type="time"
            dir="ltr"
            step={Math.max(1, minuteStep) * 60}
            value={time}
            onChange={(event) => handleTimeChange(event.target.value)}
            className="ms-auto h-9 w-32"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-border p-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={!inRange(today)}
            onClick={() => update(today)}
          >
            {labels?.today ?? "Now"}
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={!text}
            onClick={() => update()}
          >
            {labels?.remove ?? "Remove"}
          </Button>

          <Button
            type="button"
            size="sm"
            onClick={() => {
              normalize();
              setOpen(false);
            }}
          >
            {labels?.done ?? "Done"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
