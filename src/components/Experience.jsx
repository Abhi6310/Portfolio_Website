import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from '../constants';

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold text-center mb-8">Work Experience</h2>
        </motion.div>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              iconStyle={{ background: experience.iconBg }}
              icon={<img src={experience.icon} alt={experience.company_name} className="w-full h-full object-contain" />}
            >
              <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
              <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, idx) => (
                  <li key={`experience-point-${idx}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
