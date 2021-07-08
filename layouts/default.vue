<template>
  <div>
    <header>
      <div class="relative">
        <div class="header__wrapper">
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
            <nuxt-link :to="{ name: 'index' }" class="text-base font-medium">
              Home
            </nuxt-link>
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
          :class="mobileMenu ? 'fixed' : 'hidden'"
          class="inset-0 flex z-40"
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
    <!-- <transition name="fade"> -->
    <transition name="slide" mode="out-in">
      <Nuxt />
    </transition>
    <footer class="py-16">
      <div class="wrapper">
        <nav
          class="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div class="px-5 py-2">
            <nuxt-link :to="{ name: 'index' }" class="text-base font-medium">
              Home
            </nuxt-link>
          </div>

          <div class="px-5 py-2">
            <nuxt-link :to="{ name: 'services' }" class="text-base font-medium">
              Services
            </nuxt-link>
          </div>

          <div class="px-5 py-2">
            <nuxt-link :to="{ name: 'contact' }" class="text-base font-medium">
              Contact
            </nuxt-link>
          </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
          <a href="#" target="_blank">
            <span class="sr-only">Facebook</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a href="#" target="_blank">
            <span class="sr-only">Instagram</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a href="mailto:jo@hatchconsulting.co.nz" target="_blank">
            <span class="sr-only">Email</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              ></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
        <p class="mt-8 text-center text-base text-gray-400">
          &copy; {{ new Date().getFullYear() }} Hatch Consulting Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
    };
  },
};
</script>


<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(4%);
}
</style>
