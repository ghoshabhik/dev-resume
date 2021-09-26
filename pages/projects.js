import Image from "next/image";
import { Layout } from "../components/Layout"

export default function Projects() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full pt-20">
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-4 bg-blueaccent"></div>
          <p className="uppercase font-semibold text-3xl">Projects</p>

        </div>
        <div className="h-1 w-36 bg-blueaccent"></div>

        <div className="max-w-xl my-10 text-center tracking-tight">
          These are some of my freelance or side projects. Please feel free to take a look around and if you have any question,
          suggestion or comments - please drop a message on the contact page
        </div>

        <div className="flex flex-col space-y-10 mb-10">
          {/* List of Projects */}
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:max-w-xl bg-white shadow-lg rounded-lg">
            <div className="py-10 col-span-2">
              <p className="border-l-8 border-blueaccent text-2xl font-semibold px-5 py-4">Metadata Management</p>
              <p className="my-5 px-3">This is project provides user a one stop platform for Technical Metadata Management, Business Glossary and </p>
            </div>
            <div className="bg-goldenlight flex items-center justify-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:max-w-xl bg-white shadow-lg rounded-lg">
            <div className="py-10 col-span-2">
              <p className="border-l-8 border-blueaccent text-2xl font-semibold px-5 py-4">Spring Batch Orchestration</p>
              <p className="my-5 px-3">This is project provides user a one stop platform for Technical Metadata Management, Business Glossary and </p>
            </div>
            <div className="bg-goldenlight flex items-center justify-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 lg:max-w-xl bg-white shadow-lg rounded-lg">
            <div className="py-10 col-span-2">
              <p className="border-l-8 border-blueaccent text-2xl font-semibold px-5 py-4">A Stream Processing Engine</p>
              <p className="my-5 px-3">This is project provides user a one stop platform for Technical Metadata Management, Business Glossary and </p>
            </div>
            <div className="bg-goldenlight flex items-center justify-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 lg:max-w-xl bg-white shadow-lg rounded-lg">
            <div className="py-10 col-span-2">
              <p className="border-l-8 border-blueaccent text-2xl font-semibold px-5 py-4">A Log Management System</p>
              <p className="my-5 px-3">This is project provides user a one stop platform for Technical Metadata Management, Business Glossary and </p>
            </div>
            <div className="bg-goldenlight flex items-center justify-center py-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
