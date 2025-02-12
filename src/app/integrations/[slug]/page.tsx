import { Integration } from '@/types/integration'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import path from 'path'
import ReactMarkdown from 'react-markdown'

async function getIntegrations() {
  const integrationsDirectory = path.join(process.cwd(), 'content/integrations')
  const filenames = fs.readdirSync(integrationsDirectory)

  const integrations = filenames.map((filename) => {
    const filePath = path.join(integrationsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return data as Integration
  })

  return integrations
}

export async function generateStaticParams() {
  const integrations = await getIntegrations()
  return integrations.map((integration) => ({
    slug: integration.slug
  }))
}

async function getIntegrationContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    'content/integrations',
    `${slug}.md`
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)
  return { content, data: data as Integration }
}

export default async function IntegrationPage({
  params
}: {
  params: { slug: string }
}) {
  const { content, data: integration } = await getIntegrationContent(
    params.slug
  )

  if (!integration) {
    notFound()
  }

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-8 is-offset-2">
            <a href="/integrations" className="button is-ghost">
              <span className="icon is-small has-text-decoration-none">
                <i className="lni lni-arrow-left is-size-6" />
              </span>
              <span className="has-text-decoration-none">
                Back to integrations
              </span>
            </a>

            <figure className="image is-16by9">
              <Image
                src={integration.coverImage}
                alt={integration.title}
                width={1200}
                height={400}
                className="rounded"
              />
            </figure>

            <h1 className="title is-2 has-text-center">{integration.title}</h1>
            <p className="subtitle is-5">{integration.type}</p>

            <div>
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            {integration.relatedLinks &&
              integration.relatedLinks.length > 0 && (
                <div className="columns is-multiline">
                  <div className="column is-12">
                    <h2 className="text-2xl font-bold mb-6">
                      Related Resources
                    </h2>
                  </div>
                  {integration.relatedLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`column is-fullheight ${
                        index === integration.relatedLinks!.length - 1 &&
                        integration.relatedLinks!.length % 2 === 1
                          ? 'is-12'
                          : ''
                      }`}
                    >
                      <div className="card is-fullheight">
                        <div className="card-content is-fullheight">
                          <h3 className="title is-4">{link.title}</h3>
                          <p>{link.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
