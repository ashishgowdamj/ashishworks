import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, courses } from '@/lib/content';
import { Section, SectionHeading } from './SectionHeading';

const Education = () => (
  <Section id="education">
    <SectionHeading
      index="08"
      label="Background"
      title="Education & continued learning"
    />

    <div className="grid lg:grid-cols-2 gap-6">
      <div className="border border-gray-800 rounded-xl p-6 lg:p-8 bg-[#101010]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-amber-400" />
          </span>
          <h3 className="text-white font-bold text-lg">Education</h3>
        </div>
        <p className="text-white font-semibold">{education.degree}</p>
        <p className="text-gray-400 text-sm mt-1">{education.institution}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-sm">
          <span className="text-gray-500">{education.period}</span>
          <span className="text-gray-700">·</span>
          <span className="text-amber-400">{education.score}</span>
        </div>
      </div>

      <div className="border border-gray-800 rounded-xl p-6 lg:p-8 bg-[#101010]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-amber-400" />
          </span>
          <h3 className="text-white font-bold text-lg">Courses</h3>
        </div>
        <ul className="space-y-4">
          {courses.map((course) => (
            <li key={course.name} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">{course.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{course.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Education;
