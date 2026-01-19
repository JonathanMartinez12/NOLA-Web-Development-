'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaHeart,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaAward,
  FaHandshake,
} from 'react-icons/fa';

const values = [
  {
    icon: FaHeart,
    title: 'Client-Focused',
    description: 'Your success is our success. We prioritize your goals and work tirelessly to exceed expectations.',
  },
  {
    icon: FaRocket,
    title: 'Innovation',
    description: 'We stay ahead of the curve with the latest technologies and best practices in web development.',
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    description: 'We believe in transparent communication and working closely with our clients every step of the way.',
  },
  {
    icon: FaLightbulb,
    title: 'Creativity',
    description: 'Every project is an opportunity to create something unique that stands out from the competition.',
  },
  {
    icon: FaAward,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in every line of code and every pixel of design.',
  },
  {
    icon: FaHandshake,
    title: 'Integrity',
    description: 'Honest pricing, realistic timelines, and transparent processes. No surprises, just results.',
  },
];

const team = [
  {
    name: 'Alex Martinez',
    role: 'Founder & Lead Developer',
    bio: '10+ years of experience in full-stack development and SEO optimization.',
    image: '/images/team/member-1.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    bio: 'Award-winning designer specializing in conversion-focused user experiences.',
    image: '/images/team/member-2.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'SEO Specialist',
    bio: 'Proven track record of getting clients to #1 rankings on Google.',
    image: '/images/team/member-3.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    bio: 'Ensures every project is delivered on time and exceeds client expectations.',
    image: '/images/team/member-4.jpg',
  },
];

const milestones = [
  { year: '2018', event: 'NOLA Web Development Founded' },
  { year: '2019', event: 'Reached 100 Happy Clients' },
  { year: '2020', event: 'Expanded Services to Include E-Commerce' },
  { year: '2021', event: 'Won Best Web Development Agency Award' },
  { year: '2022', event: 'Launched Digital Marketing Division' },
  { year: '2023', event: 'Celebrated 500+ Successful Projects' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About NOLA Web Development
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              We're a passionate team of developers, designers, and digital marketers
              dedicated to helping New Orleans businesses thrive online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Founded in 2018, NOLA Web Development was born from a simple mission:
                  to help local businesses compete in the digital age without breaking the bank.
                </p>
                <p>
                  What started as a one-person operation has grown into a full-service
                  digital agency serving clients across New Orleans and beyond. We've helped
                  over 500 businesses transform their online presence and achieve measurable results.
                </p>
                <p>
                  Our team combines technical expertise with creative vision and strategic
                  thinking. We don't just build websites—we create digital experiences that
                  drive growth, engage audiences, and deliver ROI.
                </p>
                <p>
                  Whether you're a small startup or an established enterprise, we bring the
                  same level of dedication, creativity, and technical excellence to every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-9xl font-bold opacity-20">
                  NOLA
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The talented individuals behind our success. Each team member brings
              unique expertise and passion to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A timeline of milestones that have shaped our growth and success.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-4 border-primary-500 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-6 h-6 -ml-[14px] rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white shadow-lg"></div>
                <div className="card ml-6">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {milestone.year}
                  </div>
                  <p className="text-lg text-slate-700 font-semibold">
                    {milestone.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-accent-600 to-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Ready to take your business to the next level? We'd love to hear about
              your project and discuss how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-primary-600 transition-all duration-200 shadow-lg"
              >
                Get in Touch
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-lg font-medium rounded-lg text-primary-600 hover:bg-slate-100 transition-all duration-200 shadow-lg"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
