import { Layout } from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full">
        <div className="flex space-x-2 items-center">
          <div className="md:ml-5 ml-2 h-4 w-4 bg-blueaccent"></div>
          <p className="uppercase font-semibold text-3xl">Contact</p>
        </div>

      </div>
    </Layout>
  )
}
