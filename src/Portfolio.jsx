import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="p-6 bg-gray-100 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Ayush Thakur</h1>
          <p className="mt-1 text-gray-600 max-w-xl">
            Developer Relations Engineer with a passion for building communities, writing impactful technical content, and
            creating developer-focused tools and apps. Proven experience leading go-to-market strategies, managing 10K+
            communities, and delivering talks at major conferences.
          </p>
          <div className="mt-4 flex gap-6 text-blue-600 text-lg">
            <a href="https://github.com/ayush2390" target="_blank" className="flex items-center gap-2">
              <FaGithub /> 
            </a>
            <a href="https://x.com/JSAyushThakur" target="_blank" className="flex items-center gap-2">
              <FaXTwitter /> 
            </a>
            <a href="https://www.linkedin.com/in/ayush2390/" target="_blank" className="flex items-center gap-2">
              <FaLinkedin /> 
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold">Developer Relations Engineer – Potpie AI</p>
              <p className="text-sm text-gray-600">Jan 2025 – Present · 6 mos</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Led Go-To-Market strategy and developer campaigns</li>
                <li>Spoke at tech conferences, ran workshops</li>
                <li>Managed communities & wrote technical blogs</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Community Manager – ReactPlay</p>
              <p className="text-sm text-gray-600">Jul 2023 – Jan 2025 · 1 yr 7 mos</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Managed Discord community of 10K+ developers</li>
                <li>Organized hybrid events, reviewed PRs</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Technical Writer – LambdaTest</p>
              <p className="text-sm text-gray-600">Jul 2022 – Jan 2025 · 2 yrs 7 mos</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Published SEO-optimized blogs with 100K+ views</li>
                <li>Focused on readability, storytelling, code integration</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Developer Advocate – Tembo</p>
              <p className="text-sm text-gray-600">Aug 2023 – Sep 2024 · 1 yr 2 mos</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Handled dev communities, wrote documentation</li>
                <li>Built demo apps, improved trial conversions</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Developer Advocate – Linkall</p>
              <p className="text-sm text-gray-600">Feb 2023 – Aug 2023 · 7 mos</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Produced blogs and videos with 80K+ reach</li>
                <li>Hosted developer workshops with 600+ attendees</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Assistant Software Engineer – TCS</p>
              <p className="text-sm text-gray-600">Feb 2022 – Mar 2023 · 1 yr 1 mo</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Worked on Passport Dept, Amgen & Ultimatix projects</li>
                <li>Optimized codebases with JS, Python, React, etc.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <p className="text-sm text-gray-700">
            HTML, CSS, JavaScript, ReactJS, TypeScript, Next.js, Redux, GraphQL, Git, Solidity, REST API, PostgreSQL,
            Kubernetes
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-sm text-gray-700">
            B.Tech (Information Technology) – Guru Gobind Singh Indraprastha University, New Delhi (2017 – 2021)
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Blogs & Documentation</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600">
            <li>
              <a href="https://dev.to/potpie/i-built-an-ai-agent-that-creates-readme-file-for-your-code-57l2" target="_blank">
                AI Agent that Creates README
              </a>
            </li>
            <li>
              <a href="https://dev.to/composiodev/built-an-ai-tool-to-help-my-team-tweet-smart-goodbye-manual-posting-hello-viral-hits-5fap" target="_blank">
                Built an AI Tweet Tool
              </a>
            </li>
            <li>
              <a href="https://dev.to/composiodev/9-cutting-edge-open-source-tools-to-build-next-gen-ai-apps-1mho" target="_blank">
                9 Open Source Tools for AI Apps
              </a>
            </li>
            <li>
              <a href="https://dev.to/julep/create-your-own-ai-discord-bot-with-julep-58lf" target="_blank">
                AI Discord Bot with Julep
              </a>
            </li>
            <li>
              <a href="https://dev.to/julep/building-your-first-ai-application-with-julep-a-step-by-step-guide-4n71" target="_blank">
                First AI App with Julep
              </a>
            </li>
            <li>
              <a href="https://potpie.ai/blog/open-source-custom-ai-agents" target="_blank">
                Custom AI Agents – Potpie Blog
              </a>
            </li>
            <li>
              <a href="https://docs.potpie.ai/introduction" target="_blank">
                Potpie Documentation
              </a>
            </li>
            <li>
              <a href="https://docs.tembo.io/welcome" target="_blank">
                Tembo Documentation
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t mt-10">
        © {new Date().getFullYear()} Ayush Thakur
      </footer>
    </div>
  );
}
