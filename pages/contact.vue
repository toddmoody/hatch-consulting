<template>
  <div class="wrapper">
    <section>
      <div class="mx-auto lg:grid lg:grid-cols-6 gap-4">
        <div class="lg:col-span-2">
          <div class="max-w-lg mx-auto">
            <p class="byline text-brandTwo-900 tracking-wider">
              We're here to help
            </p>
            <h2 class="">Get in touch</h2>
            <p class="mt-3">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <div class="mt-8">
              <div class="mt-6">
                <a href="tel:0064 022 172 6872" class="flex">
                  <!-- Heroicon name: outline/phone -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +64 022 172 6872
                </a>
              </div>
              <div class="mt-3">
                <a href="mailto:jo@hatchconsulting.co.nz" class="flex">
                  <!-- Heroicon name: outline/mail -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  jo@hatchconsulting.co.nz
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4">
          <div class="max-w-lg mx-auto lg:max-w-none">
            <form
              action="https://formspree.io/f/meqvzwwj"
              method="POST"
              class="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label for="full-name" class="sr-only">Full name</label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autocomplete="name"
                  class="
                    block
                    w-full
                    shadow-sm
                    py-3
                    px-4
                    placeholder-gray-500
                    focus:ring-brandThree-900
                    focus:border-brandThree-900
                    border-gray-300
                    rounded-md
                  "
                  placeholder="Full name"
                />
              </div>
              <div>
                <label for="email" class="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="
                    block
                    w-full
                    shadow-sm
                    py-3
                    px-4
                    placeholder-gray-500
                    focus:ring-brandThree-900
                    focus:border-brandThree-900
                    border-gray-300
                    rounded-md
                  "
                  placeholder="Email"
                />
              </div>
              <div>
                <label for="phone" class="sr-only">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  class="
                    block
                    w-full
                    shadow-sm
                    py-3
                    px-4
                    placeholder-gray-500
                    focus:ring-brandThree-900
                    focus:border-brandThree-900
                    border-gray-300
                    rounded-md
                  "
                  placeholder="Phone"
                />
              </div>
              <div>
                <label for="message" class="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="
                    block
                    w-full
                    shadow-sm
                    py-3
                    px-4
                    placeholder-gray-500
                    focus:ring-brandThree-900
                    focus:border-brandThree-900
                    border border-gray-300
                    rounded-md
                  "
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button type="submit" class="button outline">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="cta">
      <div>
        <div
          class="
            bg-brandFour-900
            rounded-lg
            shadow-xl
            overflow-hidden
            lg:grid lg:grid-cols-2
            lg:gap-4
          "
        >
          <div
            class="
              pt-10
              pb-12
              px-6
              sm:pt-16
              sm:px-16
              lg:py-16
              lg:pr-0
              xl:py-20
              xl:px-20
            "
          >
            <div class="lg:self-center">
              <h2 class="">
                <span class="block text-gray-300">"Coming together is a</span>
                <span class="block text-gray-300"
                  >beginning, keeping together</span
                >
                <span class="block text-gray-300">is progress, working</span>
                <span class="block text-gray-300">together is success."</span>
              </h2>
              <p>Henry Ford</p>
              <nuxt-link :to="{ name: 'services' }" class="button outline"
                >Services</nuxt-link
              >
              <nuxt-link :to="{ name: 'contact' }" class="button solid ml-3"
                >Contact us</nuxt-link
              >>
            </div>
          </div>
          <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              class="
                transform
                translate-x-6 translate-y-6
                rounded-md
                sm:translate-x-16
                lg:translate-y-20
              "
              src="~/assets/images/contact-cta.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>