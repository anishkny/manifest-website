import Image from 'next/image'
import InstallCLI from './components/InstallCLI'
import LiveCodeHero from './components/LiveCodeHero'
import SubscribeForm from './components/SubscribeForm'

export default function Home() {
  return (
    <main>
      <div>
        <div className="has-background-glass">
          <div className="container is-header">
            <nav
              className="navbar has-background-transparent"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="/assets/images/logo-poc.svg"
                    alt="logo of manifest"
                    loading="lazy"
                    className="mx-2"
                  />
                </a>
                <div className="is-flex is-hidden-desktop">
                  <a className="navbar-item px-5-tablet" href="/docs">
                    <i className="lni lni-empty-file is-size-6"></i>
                  </a>
                  <a
                    className="navbar-item px-5-tablet"
                    href="https://discord.gg/FepAked3W7"
                    target="_blank"
                  >
                    <i className="lni lni-discord-alt  is-size-6"></i>
                  </a>
                  <a
                    className="navbar-item px-5-tablet"
                    href="https://github.com/mnfst/manifest"
                    target="_blank"
                  >
                    <i className="lni lni-github-original is-size-6"></i>
                  </a>
                </div>
              </div>

              <div className="navbar-menu has-text-weight-bold">
                <div className="navbar-end">
                  <a className="navbar-item" href="/docs">
                    Docs
                  </a>
                  <a
                    className="navbar-item"
                    href="https://discord.gg/FepAked3W7"
                    target="_blank"
                  >
                    Discord
                  </a>
                  <a
                    className="navbar-item"
                    href="https://github.com/mnfst/manifest"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="my-6">
          <div className="container zi-1">
            <div className="columns is-multiline">
              <div className="column is-6-tablet is-5-desktop">
                <div className="content is-medium  ">
                  <h1 className="title is-1 mb-5">
                    The
                    <span className="title-gradient">
                      {' '}
                      simplest backend
                    </span>{' '}
                    you will find
                  </h1>

                  <p className="content is-normal   is-normal">
                    Manifest is a complete backend that fits into one file of
                    simple code.
                  </p>
                  <InstallCLI />
                </div>
              </div>
              <div className="column is-6 is-offset-0-tablet is-offset-1-desktop">
                <div className="content is-normal  ">
                  <LiveCodeHero />
                </div>
              </div>
              <div className="column is-12 my-4">
                <div className="card has-background-glass">
                  <div className="card-content is-normal has-text-centered card-content--how-it-works">
                    <div className="content is-normal has-text-centered">
                      <h2 className="title is-2">
                        Define your data structure, get a business-ready backend
                        with essential features:
                      </h2>
                      <div className="backend-list is-boredered is-rounded is-flex is-align-items-center is-justify-content-center">
                        <span className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-checkmark has-text-success"></i>
                          </span>
                          <span>Database</span>
                        </span>

                        <span className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-checkmark has-text-success"></i>
                          </span>
                          <span>Admin panel</span>
                        </span>
                        <span className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-checkmark has-text-success"></i>
                          </span>
                          <span>REST API</span>
                        </span>
                        <span className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-checkmark has-text-success"></i>
                          </span>
                          <span>Javascript SDK</span>
                        </span>
                      </div>

                      <div className="stack-list is-flex is-align-items-center is-justify-content-center is-flex-wrap-wrap is-flex-direction-column">
                        <span>
                          Plug-and-play with top frontend stacks through SDK or
                          classic REST API:{' '}
                        </span>
                        <div className="stack-list is-flex is-align-items-center is-justify-content-center is-flex-wrap-wrap mt-4">
                          <span title="See how to plug CASE with React">
                            <img
                              src="./assets/images/react.svg"
                              alt="React logo"
                              width="40px"
                              className="mx-2"
                            />
                          </span>
                          <span title="See how to plug CASE with Vue">
                            <img
                              src="./assets/images/vue.svg"
                              alt="Vue logo"
                              width="40px"
                              className="mx-2"
                            />
                          </span>
                          <span title="See how to plug CASE with Angular">
                            <img
                              src="./assets/images/angular.svg"
                              alt="Angular logo"
                              width="40px"
                              className="mx-2"
                            />
                          </span>
                          <span title="See how to plug CASE with Svelte">
                            <img
                              src="./assets/images/svelte.svg"
                              alt="Svelte logo"
                              width="40px"
                              className="mx-2"
                            />
                          </span>
                          <img
                            src="./assets/images/nuxt.svg"
                            alt="Nuxt logo"
                            width="40px"
                            className="mx-2"
                          />
                          <img
                            src="./assets/images/nextjs.svg"
                            alt="NextJS logo"
                            width="70px"
                            className="mx-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-8 is-offset-2 is-6-fullhd is-offset-3-fullhd section--journey">
                <div className="bg-shape"></div>
                <div className="content is-normal has-text-left">
                  <h2 className="title is-2">
                    Our journey to rethink the backend
                  </h2>
                  <p>
                    If you ask 10 backend developers what you should use for
                    your app’s backend, they will probably come up with 10
                    different stacks. Why? Because there is no straightforward
                    way to create a backend. One more step and you suddenly get
                    overwhelmed with databases, runtimes, containers,
                    infrastructure and so on.
                  </p>

                  <p>
                    Recently, we have seen cool Backend-as-a-Service products
                    like Supabase or Appwrite gaining popularity as they offer a
                    fast and reliable way to deploy backends. However, their
                    no-code approach generates awful code difficult to follow,
                    making apps less reliable. Moreover, using a UI is slower
                    than coding, especially now that AI assistants are here to
                    help you.
                  </p>

                  <p>
                    Finally, we strongly believe that we can eliminate the
                    backend hassle without trading off our love for coding
                    properly.
                  </p>
                </div>
              </div>
              <div className="column is-8 is-offset-2 is-6-fullhd is-offset-3-fullhd my-4">
                <div className="content is-normal has-text-left">
                  <article className="message is-info is-success is-bordered">
                    <div className="message-header">
                      <p>Manifest is currently a Proof-of-Concept (POC)</p>
                    </div>
                    <div className="message-body">
                      We aim to validate this new approach for the backend,
                      thanks to your feedback. Give it a try and let us know
                      what you think via our poll.
                    </div>
                  </article>
                </div>
              </div>
              <div className="column is-8 is-offset-2 is-6-fullhd is-offset-3-fullhd">
                <div className="content is-normal has-text-left mb-4">
                  <div className="content is-normal has-text-left">
                    <h2 className="title is-2">Get your hands on!</h2>
                    <ul>
                      <li>
                        <a href="/docs" target="_blank">
                          Read the documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/mnfst/manifest"
                          target="_blank"
                        >
                          Source code
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer has-background-black has-text-white pb-4">
          <div className="container">
            <div>
              <div className="columns is-multiline">
                <div className="column is-3">
                  <div className="content">
                    <p className="has-text-weight-bold is-size-6">Docs</p>
                    <ul className="no-lst">
                      <li>
                        <a href="https://manifest.build/docs" target="_blank">
                          Developer Docs
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/mnfst/manifest/blob/master/CONTRIBUTING.md"
                          target="_blank"
                        >
                          Contributor Docs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="column is-3">
                  <div className="content">
                    <p className="has-text-weight-bold is-size-6">Community</p>
                    <ul className="no-lst">
                      <li>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="lni lni-discord-alt is-size-6"></i>
                          </span>
                          <a
                            href="https://discord.gg/FepAked3W7"
                            target="_blank"
                          >
                            {' '}
                            Discord
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="lni lni-comments-alt-2 is-size-6"></i>
                          </span>
                          <a
                            href="https://github.com/mnfst/manifest/discussions"
                            target="_blank"
                          >
                            Discussions
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column is-3">
                  <div className="content">
                    <p className="has-text-weight-bold is-size-6">More</p>
                    <ul className="no-lst">
                      <li>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="lni lni-github-original is-size-6"></i>
                          </span>
                          <a
                            href="https://github.com/mnfst/manifest"
                            target="_blank"
                          >
                            Github
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="lni lni-heart-fill is-size-6"></i>
                          </span>
                          <a
                            href="https://opencollective.com/mnfst"
                            target="_blank"
                          >
                            Support us
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column is-3">
                  <div className="content">
                    <p className="has-text-weight-bold is-size-6">Stay tuned</p>
                    <p>
                      We are building the simplest backend in the world. Do you
                      want to embark on this adventure with us? Leave your email
                      to stay in touch and start that journey with us.
                    </p>
                    <SubscribeForm />
                  </div>
                </div>
                <div className="column is-12">
                  <div className="separator"></div>
                </div>
                <div className="column is-6">
                  <Image
                    src="/assets/images/logo-light.svg"
                    width={180}
                    height={50}
                    alt="logo of manifest"
                    className="footer-logo"
                    loading="lazy"
                  />
                </div>
                <div className="column is-6 has-text-right pt-5">
                  <span>
                    Source code licensed{' '}
                    <a
                      className="has-text-white is-underlined"
                      href="https://opensource.org/license/mit"
                      target="_blank"
                    >
                      MIT
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
