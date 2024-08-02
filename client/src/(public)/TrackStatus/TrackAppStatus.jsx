import React, { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import HomeNavigation from '@/components/general/HomeNavigation'
import { Badge } from '@/components/ui/badge'

import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { LoadingSpinner } from '@/lib/LoadingSpinner'
import SEO from '@/lib/SEO'

const TrackAppStatus = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
  const [trackingNumber, setTrackingNumber] = useState('')
  const [application, setApplication] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setApplication(null)
    try {
      const response = await axios.get(`/api/application/application-status/${trackingNumber}`)
      setApplication(response.data.application)
    } catch (err) {
      toast.error(t('application_not_found'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
                    <SEO

title="الأمانة - تتبع حالة الطلب"
description=" اضمن مستقبلك معنا الان و احصل على فرصتك الدراسة في الجامعات التركية"
name=" name."
type="article"
/>
      <HomeNavigation />
      <div
      className={`h-screen flex justify-center items-center flex-col bg-[#aaaa9b] ${isArabic ? 'arabic-font' : 'paragfont'}`}>
        <main className="">
          <section className="container mx-auto flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {t('check_status')}
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                {t('enter_application_number')}
              </p>
            </div>
            <form className="mt-8 w-full max-w-md" onSubmit={handleSubmit}>
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  placeholder={t('enter_application_number')}
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1 rounded-l-md border-0 py-2 pl-4 text-gray-900 focus:ring-0"
                  disabled={loading}
                />
                <Button type="submit" size="sm" className="rounded-r-md px-4 py-2" disabled={loading}>
                  {loading ? <LoadingSpinner /> : t('submit_button')}
                </Button>
              </div>
            </form>
            {application && (
              <div className="mt-12 w-full max-w-md">
                <Card className="border-0 rounded-lg bg-[#eeeeee]">
                  <CardContent className="p-4 border-0 rounded-full">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-medium">{application.university}</p>
                        <p className="text-gray-500">{t('submitted_on')} {new Date(application.createdAt).toLocaleDateString()}</p>
                      </div>
                      <Badge className="rounded-full px-3 py-1 text-white font-bold">{t(application.appStatus)}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  )
}

export default TrackAppStatus
