import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl font-black">{t('meta_title')}</h2>
      <p className="my-4 text-center text-base">{t('meta_description')}</p>

      <div className="mx-auto mt-10 flex w-full max-w-screen-md items-center justify-center rounded-lg border-[3px] border-[#bec0da] border-[dashed] bg-[#efeef3] p-10 md:w-3/4">
        <Button className="relative h-14 bg-[#727cf5] px-6 text-xl font-black text-white hover:bg-[#727cf5]">
          <Input type="file" id="file" accept="image/*" className="absolute inset-0 h-full cursor-pointer opacity-0" hidden />
          <Image
            className="text-emerald-100"
            src="/assets/images/upload.svg"
            alt="upload file to FreeConvert"
            width={24}
            height={24}
          />
          <span>Choose Files</span>
        </Button>
      </div>
    </div>
  );
};
