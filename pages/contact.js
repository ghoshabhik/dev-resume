import { Layout } from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-4 bg-blueaccent"></div>
          <p className="uppercase font-semibold text-3xl">Contact</p>
          
        </div>
        <div className="h-1 w-36 bg-blueaccent"></div>
      </div>
    </Layout>
  )
}
