import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { LatestNews } from "@/components/home/LatestNews";
import { CTASection } from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSoftwareLd } from "@/lib/seo";
import type { Locale } from "@/types/config";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/*
        Beschreibt das Paket selbst mit Version, Lizenz und Bezugsquelle.
        Bei einem Softwareprojekt ist das die aussagekräftigste Angabe: Sie
        verknüpft die Seite mit der Paketidentität, statt Suchmaschinen diese
        aus dem Fließtext ableiten zu lassen.
      */}
      <JsonLd data={buildSoftwareLd(locale)} />
      <Hero locale={locale} />
      <FeatureGrid locale={locale} />
      <LatestNews locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
