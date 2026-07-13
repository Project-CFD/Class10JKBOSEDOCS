import { cn } from '@/lib/cn';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import {
  BookOpenIcon,
  CalculatorIcon,
  GlobeIcon,
  LanguagesIcon,
  LibraryIcon,
  MicroscopeIcon,
} from 'lucide-react';
import React from 'react';

const headingVariants = cva('font-medium tracking-tight', {
  variants: {
    variant: {
      h1: 'text-4xl lg:text-6xl font-bold',
      h2: 'text-3xl lg:text-4xl',
      h3: 'text-xl lg:text-2xl',
    },
  },
});

const buttonVariants = cva(
  'inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-brand-foreground hover:bg-brand-200',
        secondary: 'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const cardVariants = cva(
  'rounded-2xl border bg-fd-card text-fd-card-foreground p-6 sm:p-8 shadow-sm',
);

export default function HomePage() {
  return (
    <main className="container flex flex-col items-center py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className={cn(headingVariants({ variant: 'h1', className: 'mb-6 text-brand' }))}>
          JKBOSE Class 10 Study Portal
        </h1>
        <p className="text-lg md:text-xl text-fd-muted-foreground max-w-3xl mx-auto">
          We teach everything step-by-step for each subject. Get previous year questions, textbook
          solutions, notes, marked important topics, syllabus, and weightage—all organized
          systematically to help you succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <SubjectCard
          title="Urdu"
          description="Complete Tashreeh, Grammar, Chapters, and PYQs."
          href="/docs/urdu"
          icon={<LanguagesIcon className="w-8 h-8 mb-4 text-emerald-500" />}
        />
        <SubjectCard
          title="Urdu (Roman English)"
          description="Same rich Urdu content, but written in Roman English for easy reading."
          href="/docs/urdu-roman"
          icon={<LanguagesIcon className="w-8 h-8 mb-4 text-teal-500" />}
        />
        <SubjectCard
          title="Science"
          description="Physics, Chemistry, and Biology. Notes, weightage, and important topics marked."
          href="/docs/science"
          icon={<MicroscopeIcon className="w-8 h-8 mb-4 text-blue-500" />}
        />
        <SubjectCard
          title="Social Science (SST)"
          description="History, Geography, Political Science. Step-by-step guidance."
          href="/docs/sst"
          icon={<GlobeIcon className="w-8 h-8 mb-4 text-orange-500" />}
        />
        <SubjectCard
          title="English"
          description="Literature, Grammar, Writing Skills, Reading Skills, and more."
          href="/docs/english"
          icon={<BookOpenIcon className="w-8 h-8 mb-4 text-indigo-500" />}
        />
        <SubjectCard
          title="Mathematics"
          description="Direct access to solved textbook questions and main topics."
          href="/docs/maths"
          icon={<CalculatorIcon className="w-8 h-8 mb-4 text-red-500" />}
        />
        <SubjectCard
          title="Syllabus"
          description="Complete officially prescribed JKBOSE Class 10th Syllabus."
          href="/docs/syllabus"
          icon={<LibraryIcon className="w-8 h-8 mb-4 text-purple-500" />}
          className="md:col-span-2 lg:col-span-3"
        />
      </div>
    </main>
  );
}

function SubjectCard({
  title,
  description,
  href,
  icon,
  className,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        cardVariants(),
        'hover:border-brand transition-colors flex flex-col items-start',
        className,
      )}
    >
      {icon}
      <h3 className={cn(headingVariants({ variant: 'h3', className: 'mb-2' }))}>{title}</h3>
      <p className="text-fd-muted-foreground">{description}</p>
    </Link>
  );
}
