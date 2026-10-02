import FeaturedArticleSection from '@/components/landing/resources/FeaturedArticleSection'
import NewsletterSection from '@/components/landing/resources/NewsletterSection'
import ResourcesArticlesSection from '@/components/landing/resources/ResourcesArticlesSection'
import ResourcesHeroSection from '@/components/landing/resources/ResourcesHeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <ResourcesHeroSection/>
      <FeaturedArticleSection/>
      <ResourcesArticlesSection/>
      <NewsletterSection/>
    </div>
  )
}
