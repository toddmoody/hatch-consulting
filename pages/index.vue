<template>
  <div class="wrapper">
    <div class="content">
      <section class="flex-col">
        <div class="max-w-5xl mx-auto text-center mb-16">
          <h1>The Cost and Project Management Experts</h1>
          <p class="statement">
            Providing practical and professional advice for the success of your
            organisation.
          </p>
        </div>
        <div class="bcg-parallax box rounded-lg opacity-25">
          <div class="bcg shadow-xl">
          </div>
        </div>
      </section>
      <section class="flex-col">
        <div>
          <div class="max-w-5xl mx-auto text-center">
            <span class="byline text-brandTwo-900 tracking-wider"
              >Your project advisory specialists</span
            >
            <h3>Our approach</h3>
            <p class="mt-4">
              We are proud to work with you and your team to find solutions that
              work at both a strategic level and in real life. We have spent the
              last 15 years working across the construction industry as delivery
              managers, consultants, clients and expert advisors. And now we
              want to work with you. We are a passionate and forward-thinking
              team who enjoy solving problems and finding the best solution that
              will deliver long-term success to your projects and organisation.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-16">
          <div class="pt-6">
            <div class="flow-root rounded-lg px-6 pb-8">
              <div class="-mt-6 text-center">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-brandThree-900
                      rounded-full
                      shadow-lg
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-users"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </span>
                </div>
                <h4 class="mt-3">Collaboration</h4>
                <p>
                  We collaborate with you throughout the process to ensure the best possible end-result for all project stakeholders.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root rounded-lg px-6 pb-8">
              <div class="-mt-6 text-center">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-brandThree-900
                      rounded-full
                      shadow-lg
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-message-square"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <h4 class="mt-3">Communication</h4>
                <p>
                  We all know communication is key and we can ensure you receive best-in-class communication every step of the way.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flow-root rounded-lg px-6 pb-8">
              <div class="-mt-6 text-center">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-brandThree-900
                      rounded-full
                      shadow-lg
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-clipboard"
                    >
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      ></path>
                      <rect
                        x="8"
                        y="2"
                        width="8"
                        height="4"
                        rx="1"
                        ry="1"
                      ></rect>
                    </svg>
                  </span>
                </div>
                <h4 class="mt-3">Clear strategy</h4>
                <p>
                  We have been refining our strategy across the last 15 years. We have a proven track record of success, so give us a try today!
                </p>
              </div>
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
              <div class="lg:self-center lg:max-w-sm">
                <h2 class="">
                  <span class="block text-gray-300"
                    >Find out more about Hatch Consulting today.</span
                  >
                </h2>
                <nuxt-link :to="{ name: 'services' }" class="button outline"
                  >Services</nuxt-link
                >
                <nuxt-link :to="{ name: 'contact' }" class="button solid ml-3"
                  >Contact us</nuxt-link
                >>
              </div>
            </div>
            <div
              class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1"
            >
              <img
                class="
                  transform
                  translate-x-6 translate-y-6
                  rounded-md
                  sm:translate-x-16
                  lg:translate-y-20
                "
                src="~/assets/images/index-alt.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startAnimations() {
      const gsap = this.$gsap;
      gsap.to(".box", { duration: 5, opacity: "1" });

      const slideParallaxScene = this.$scrollmagic.scene({
        triggerElement: '.bcg-parallax',
        triggerHook: 1,
        duration: '100%'
      })
      .setTween(TweenMax.from('.bcg', 1, {y: '-28%', ease:Power0.easeNone } ))

      this.$scrollmagic.addScene(slideParallaxScene)

    },
  },
  mounted() {
    this.startAnimations();
  }, 
};
</script>

<style lang="scss">
.bcg-parallax {
  position: relative;
  overflow: hidden;
  min-height: 450px;
  .bcg {
    position: absolute;
    background-image: url("../assets/images/home-banner.jpg");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    width: 100%;
    height: 130%;
    top: 0;
    z-index: 1;
    // opacity: 0.7;
  }
}
</style>