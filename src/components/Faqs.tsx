import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Reaction Free?',
      answer:
        'Reaction Free is a software application + Google Chrome Extension that allows you to express yourself freely while staying within copyright guidelines of content creation platforms like Youtube.',
    },
    {
      question: 'Is there a limit to the number of reactions I can upload with Reaction Free?',
      answer:
        'The video reactions will be upload directly to the content creator youtube channel, we dont interfere with the number of videos you can upload. But we do have a limit by a token system of the amount of links that can be created. 1 token = 1 link. The amount of tokens you get depends on the plan you are subscribed to and can vary in the future.',
    },
    {
      question: 'How does the Release Time Premium plan work?',
      answer:
        'We are offering a one time payment of $199 for the first 10 creators that want to support Reaction Free. This plan will allow you to create unlimited amount of reaction links forever, avoid the token system forever and access to new features first. This is a limited time offer.',
    },
  ],
  [
    {
      question: 'How does Reaction Free help content creators stay copyright-safe?',
      answer:
        'Reaction Free uses a combination of a SASS platform and a Google Chrome Extension to allow the content creator subscribers watch a tv show or a movie and the creator reaction at the same time. So the content creators only needs to upload their reaction video to Youtube and the Reaction Free platform will take care of the rest.',
    },
    {
      question: 'How does Reaction Free handle copyright claims on YouTube?',
      answer:
        'The content creators only needs to upload theirs voice, face, avatar (in case of VT content creators). Avoiding the use of any video or audio from the original content. The Reaction Free extension will take care of the rest.',
    },
    {
      question: 'How does the Google Chrome extension work?',
      answer:
        'The extension will show a floating transparent window with the youtube video reaction and will start the show when the content creator starts the show in the reaction. ',
    },
  ],
  [
    {
      question: 'How does Reaction Free help content creators stay copyright-safe?',
      answer:
        'At the moment we are on our first release so the only platform working is Crunchyroll. We are working on adding more platforms in the future. If you have a platform you would like us to add, please let us know. We are always looking for new ideas.',
    },
    {
      question: 'What are the differences between the free and paid tiers of Reaction Free?',
      answer:
        'The amount of tokens you get every month. Also premium user can use new features first. We are working on adding more features in the future.',
    },
    {
      question: 'Content creator subscribers need a premium account to use Reaction Free?',
      answer:
        'They will need a premium account of the reacted content, at first we are only working with Crunchyroll. Also users need to user a youtube premium account because we are not tested on video reaction that have advertising videos. We are working on adding more platforms in the future. If you have a platform you would like us to add, please let us know. We are always looking for new ideas.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, <a className="underline hover:cursor-pointer" href="mailto:antonio@ticroom.cl">email me </a>
             and I will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
