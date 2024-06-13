import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-center text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.S.C in Computer Science"
            subTitle="University of Sindh Jamshoro (2020 - 2023)"
            result="3.07/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="Govt Boys Degree College (2016 - 2018)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="School Of Academic Excellence"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-center text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Robx Company"
            subTitle="Robx - (2024 - Present)"
            result="PAK"
            des="
          Robx Company is a leading technology firm specializing in innovative solutions across various industries. With a commitment to excellence and a passion for cutting-edge technology.  
            "
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Robx Developer Team - (2023 - 2024)"
            result="PAKISTAN"
            des="
            Robx Company is renowned for its ability to develop and implement innovative solutions that meet the dynamic needs of its clients."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Robx - (2023 - 2024)"
            result="PAK"
            des="
            At Robx, the customer is at the heart of everything we do. We work closely with our clients to understand their unique requirements and deliver customized solutions that drive their success."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education