<template>
  <div>
    <header>
      <div class="relative">
        <div class="wrapper">
          <div class="flex w-0 flex-1">
            <nuxt-link to="/">
              <span class="sr-only">Hatch Consulting</span>
              <img
                class="h-16 w-auto"
                src="~/assets/images/logo.png"
                alt="Hatch Consulting"
              />
            </nuxt-link>
          </div>
          <div class="-mr-2 -my-2 lg:hidden">
            <button
              @click="mobileMenu = true"
              type="button"
              class="
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-300
                hover:text-white
                focus:outline-none
              "
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden lg:flex space-x-10">
            <nuxt-link :to="{ name: 'index' }" class="text-base font-medium"> Home </nuxt-link>
            <nuxt-link :to="{ name: 'services' }" class="text-base font-medium">
              Services
            </nuxt-link>
            <nuxt-link :to="{ name: 'contact' }" class="text-base font-medium">
              Contact
            </nuxt-link>
          </nav>
          <div class="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="tel:0064 022 172 6872">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="inline-block feather feather-phone"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              +64 022 172 6872
            </a>
          </div>
        </div>

        <!-- Mobile menu  -->
        <div
          v-if="mobileMenu"
          class="fixed inset-0 flex z-40 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="fixed inset-0 bg-gray-600 bg-opacity-75"
            aria-hidden="true"
          ></div>
          <div
            class="
              relative
              flex-1 flex flex-col
              max-w-xs
              w-full
              bg-brandOne-900
            "
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                @click="mobileMenu = false"
                class="
                  ml-1
                  flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-full
                  focus:outline-none
                  focus:ring-2 focus:ring-inset focus:ring-white
                "
              >
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto mx-4">
              <div class="flex-shrink-0 flex items-center px-4">
                <img
                  class="h-16 w-auto"
                  src="~/assets/images/logo.png"
                  alt="Hatch Consulting"
                />
              </div>
              <nav class="mobile__nav mt-16 flex-1 px-2 space-y-1">
                <ul class="w-full">
                  <li class="my-10">
                    <nuxt-link
                      @click.native="mobileMenu = false"
                      :to="{ name: 'index' }"
                      class="uppercase text-2xl font-semibold"
                    >
                      Home
                    </nuxt-link>
                  </li>
                  <li class="my-10">
                    <nuxt-link
                      @click.native="mobileMenu = false"
                      :to="{ name: 'services' }"
                      class="uppercase text-2xl font-semibold"
                    >
                      Services
                    </nuxt-link>
                  </li>
                  <li class="my-10">
                    <nuxt-link
                      @click.native="mobileMenu = false"
                      :to="{ name: 'contact' }"
                      class="uppercase text-2xl font-semibold"
                    >
                      Contact
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
              <div class="absolute bottom-10 px-4">
                <a href="tel: 0064 022 172 6872 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="inline-block feather feather-phone"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                  +64 022 172 6872
                </a>
              </div>
            </div>
          </div>

          <div class="flex-shrink-0 w-14">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: true,
    };
  },
};
</script>


<style>
</style>
