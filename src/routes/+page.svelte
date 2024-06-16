<script lang="ts">
  import { Image, Source } from "@unpic/svelte";
  import NomadForDesktopHero from "$lib/assets/images/nomad-for-hero-section.png";
  import NomadForMobileHero from "$lib/assets/images/nomad-atomic-mobile.png";
  import NomadColorways from "$lib/assets/images/nomad-colorways.png";
  import Knob1Front from "$lib/assets/images/frontal-knob.png";
  import FigmaCreatorMicro from "$lib/assets/images/figma-creator-micro.png";
  import CreatorBoard from "$lib/assets/images/creator-board.png";
  import CreatorMicro from "$lib/assets/images/creator-micro.png";
  import CreatorBoardXL from "$lib/assets/images/creator-board-XL.png";
	import Marquee from "./Marquee.svelte";
	import LogoSmiley from "$lib/components/LogoSmiley.svelte";

  type Link =  {
    label: string;
    url: string;
  }

  export const NavLinks: Link[] = [
    {
      label: 'store',
      url: '/store'
    },
    {
      label: 'blog',
      url: '/blog'
    },
    {
      label: 'about',
      url: '/about'
    },
    {
      label: 'wrk.shop',
      url: '/wrk-shop'
    }
  ];

  export const SocialLinks: Link[] = [
    {
      label: 'twitter/x',
      url: 'https://x.com/worklouder'
    },
    {
      label: 'instagram',
      url: 'https://instagram.com/worklouder'
    },
    {
      label: 'tiktok',
      url: 'https://tiktok.com/worklouder'
    },
    {
      label: 'threads',
      url: 'https://threads.net/worklouder'
    },
    {
      label: 'discord',
      url: 'https://discord.com/worklouder'
    }
  ];

  export const DummyLegalLinks: Link[] = [
    {
      label: 'terms of service',
      url: '#'
    },
    {
      label: 'return policy',
      url: '#'
    },
    {
      label: 'privacy policy',
      url: '#'
    },
    {
      label: 'terms and conditions',
      url: '#'
    }
  ];

  export const LegalLinks: Link[] = [
    {
      label: 'affiliate program',
      url: '/affiliate-program'
    },
    {
      label: 'terms of service',
      url: '/terms-of-service'
    },
    {
      label: 'return policy',
      url: '/return-policy'
    },
    {
      label: 'privacy policy',
      url: '/privacy-policy'
    },
    {
      label: 'terms and conditions',
      url: '/terms-and-conditions'
    }
  ];
</script>

<svelte:head>
  <title>work_louder - focus. work. rest.</title>
</svelte:head>

<header class="isolate w-full p-12 fixed top-0 inset-x-0 z-50">
  <div class="w-fit grid grid-flow-col grid-cols-[auto,1fr] p-4 rounded-full border border-neutral-200 bg-white mx-auto">
    <a
      href="/"
      class="aspect-square flex justify-center items-center p-8 rounded-full bg-transparent
		  hover:bg-neutral-200 focus:bg-neutral-200 outline-none"
      title="go to homepage"
    >
      <div class="size-24 aspect-square">
        <LogoSmiley />
      </div>
    </a>

    <nav class="hidden min-600:flex flex-row justify-center items-center gap-4">
      <button class="button text-neutral-800 hover:text-black focus:text-black hover:bg-neutral-200 focus:bg-neutral-200">
        <span>store</span>
      </button>
      <button class="button text-neutral-800 hover:text-black focus:text-black hover:bg-neutral-200 focus:bg-neutral-200">
        <span>blog</span>
      </button>
      <button class="button text-neutral-800 hover:text-black focus:text-black hover:bg-neutral-200 focus:bg-neutral-200">
        <span>about</span>
      </button>
      <button class="button text-neutral-800 hover:text-black focus:text-black hover:bg-neutral-200 focus:bg-neutral-200">
        <span>wrk.shop</span>
      </button>
      <button class="button text-neutral-800 hover:text-black focus:text-black hover:bg-neutral-200 focus:bg-neutral-200">
        <span>cart</span>
      </button>
    </nav>

    <nav class="flex min-600:hidden flex-row justify-center items-center gap-4">
      <button class="button text-neutral-800 hover:text-black focus:text-black hover:bg-neutral-200 focus:bg-neutral-200">
        <span>menu</span>
      </button>
      <button class="button text-neutral-800 hover:text-black focus:text-black hover:bg-neutral-200 focus:bg-neutral-200">
        <span>cart</span>
      </button>
    </nav>
  </div>
</header>

<main class="w-full flex flex-col gap-48 pt-[76px] px-12 pb-48">
  <section id="hero" class="w-full flex flex-col gap-48">
    <div id="hero-card" class="isolate w-full max-w-screen-min-1200 h-600 flex justify-center items-center rounded-24 border border-solid border-neutral-800 overflow-hidden bg-neutral-800 mx-auto relative">
      <picture class="w-full h-full absolute inset-0 -z-10">
        <Source
          src={NomadForDesktopHero}
          layout="fullWidth"
          height={600}
          media="(min-width: 600px)"
        />
        <Source
          src={NomadForMobileHero}
          layout="fullWidth"
          height={600}
          media="(max-width: 599px)"
        />
        <Image
          src={NomadForDesktopHero}
          layout="fullWidth"
          height={600}
          alt="a nice oblique view of the nomad [e] keyboard"
          priority
        />
      </picture>

      <div id="content" class="w-full h-full flex flex-col justify-center items-center gap-24 bg-black/60 absolute inset-0">
        <h1 class="h1 text-center">
          focus.<br />
          work.<br />
          rest.<br />
        </h1>
        <button class="button text-black bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus-visible:outline-white" style="--pad-x: 48px;">
          <span>discover the nomad</span>
        </button>
      </div>
    </div>
    <div class="w-full">
      <Marquee>
        <span class="text-neutral-500">
          know productivity, efficiency, passion, and creativity with no limits.
        </span>
      </Marquee>
    </div>
  </section>

  <section id="featured" class="w-full flex flex-col gap-48">
    <div id="featured-products" class="w-full max-w-screen-min-1200 grid grid-flow-row gap-12 mx-auto">
      <!-- PRODUCT CARDS -->
      <div id="product-card" class="isolate h-fit min-720:h-360 flex flex-col-reverse min-720:flex-row justify-start min-720:justify-center items-start min-720:items-center p-4 rounded-24 border border-solid border-primary-500 overflow-hidden bg-primary-500">
        <div id="content" class="text-black w-full min-720:max-w-360 h-fit min-720:h-full flex flex-col justify-between gap-24 p-[20px]">
          <h4 class="h4 text-start">nomad [e]</h4>
          <div id="details" class="flex flex-col gap-24">
            <p class="p">
              low profile, mechanical, and wireless. it's the first keyboard to get you in the zone, and keep you there.
            </p>
            <div id="ctas" class="flex flex-row gap-4">
              <button class="button text-white bg-black hover:bg-neutral-800 focus:bg-neutral-800 focus-visible:outline-black">
                <span>explore</span>
              </button>
              <button class="button text-black bg-white hover:bg-neutral-200 focus:bg-neutral-200 focus-visible:outline-black">
                <span>pre-order now</span>
              </button>
            </div>
          </div>
        </div>
        <div id="image-placeholder" class="w-full h-240 min-720:h-full rounded-20 overflow-hidden bg-black/20">
          <img
            src={NomadColorways}
            alt="the four nomad keyboard colorways"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div id="product-card" class="isolate h-fit min-720:h-360 flex flex-col-reverse min-720:flex-row-reverse justify-start min-720:justify-center items-start min-720:items-center p-4 rounded-24 border border-solid border-knob-orange overflow-hidden bg-knob-orange">
        <div id="content" class="text-white w-full max-w-360 h-full flex flex-col justify-between gap-24 p-[20px]">
          <h4 class="h4 text-start">k<span>&centerdot;</span>no<span>&centerdot;</span>b<span>&centerdot;</span>1</h4>
          <div id="details" class="flex flex-col gap-24">
            <p class="p">
              a keyboard evoking the look of both classic and modern technology. designed by Ben Fryc.
            </p>
            <div id="ctas" class="flex flex-row gap-4">
              <button class="button text-white bg-black hover:bg-neutral-800 focus:bg-neutral-800 focus-visible:outline-black">
                <span>explore</span>
              </button>
              <button class="button text-black bg-white hover:bg-neutral-200 focus:bg-neutral-200 focus-visible:outline-black">
                <span>pre-order now</span>
              </button>
            </div>
          </div>
        </div>
        <div id="image-placeholder" class="w-full h-240 min-720:h-full rounded-20 overflow-hidden bg-black/20">
          <img
            src={Knob1Front}
            alt="a frontal view of the knob-1 keyboard"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div id="product-card" class="isolate h-fit min-720:h-360 flex flex-col-reverse min-720:flex-row justify-start min-720:justify-center items-start min-720:items-center p-4 rounded-24 border border-solid border-figma-purple overflow-hidden bg-figma-purple">
        <div id="content" class="text-white w-full max-w-360 h-full flex flex-col justify-between gap-24 p-[20px]">
          <h4 class="h4 text-start">Figma creator micro</h4>
          <div id="details" class="flex flex-col gap-24">
            <p class="p">
              little big shortcuts, just the way you like.
            </p>
            <div id="ctas" class="flex flex-row gap-4">
              <button class="button text-white bg-black hover:bg-neutral-800 focus:bg-neutral-800 focus-visible:outline-black">
                <span>explore</span>
              </button>
              <button class="button text-black bg-white hover:bg-neutral-200 focus:bg-neutral-200 focus-visible:outline-black">
                <span>buy now</span>
              </button>
            </div>
          </div>
        </div>
        <div id="image-placeholder" class="w-full h-240 min-720:h-full rounded-20 overflow-hidden bg-black/20">
          <img
            src={FigmaCreatorMicro}
            alt="the Figma creator micro keypad"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div id="product-card" class="isolate h-fit min-720:h-360 flex flex-col-reverse min-720:flex-row-reverse justify-start min-720:justify-center items-start min-720:items-center p-4 rounded-24 border border-solid border-neutral-200 overflow-hidden bg-white">
        <div id="content" class="text-black w-full max-w-360 h-full flex flex-col justify-between gap-24 p-[20px]">
          <h4 class="h4 text-start">creator board</h4>
          <div id="details" class="flex flex-col gap-24">
            <p class="p">
              the first modular keyboard for digital creators, designed for those who defy limits and change the world.
            </p>
            <div id="ctas" class="flex flex-row gap-4">
              <button class="button text-white bg-black hover:bg-neutral-800 focus:bg-neutral-800 focus-visible:outline-black">
                <span>explore</span>
              </button>
              <button class="button text-black bg-white hover:bg-neutral-200 focus:bg-neutral-200 focus-visible:outline-black">
                <span>buy now</span>
              </button>
            </div>
          </div>
        </div>
        <div id="image-placeholder" class="w-full h-240 min-720:h-full rounded-20 overflow-hidden bg-black/20">
          <img
            src={CreatorBoard}
            alt="the creator board in all its glory"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div id="product-card" class="isolate h-fit min-720:h-360 flex flex-col-reverse min-720:flex-row justify-start min-720:justify-center items-start min-720:items-center p-4 rounded-24 border border-solid border-neutral-200 overflow-hidden bg-white">
        <div id="content" class="text-black w-full max-w-360 h-full flex flex-col justify-between gap-24 p-[20px]">
          <h4 class="h4 text-start">creator-micro</h4>
          <div id="details" class="flex flex-col gap-24">
            <p class="p">
              everything you love and want from the creator board, and a little more, distilled into a compact device
            </p>
            <div id="ctas" class="flex flex-row gap-4">
              <button class="button text-white bg-black hover:bg-neutral-800 focus:bg-neutral-800 focus-visible:outline-black">
                <span>explore</span>
              </button>
              <button class="button text-black bg-white hover:bg-neutral-200 focus:bg-neutral-200 focus-visible:outline-black">
                <span>buy now</span>
              </button>
            </div>
          </div>
        </div>
        <div id="image-placeholder" class="w-full h-240 min-720:h-full rounded-20 overflow-hidden bg-black/20">
          <img
            src={CreatorMicro}
            alt="the creator micro keypad"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div id="product-card" class="isolate h-fit min-720:h-360 flex flex-col-reverse min-720:flex-row-reverse justify-start min-720:justify-center items-start min-720:items-center p-4 rounded-24 border border-solid border-neutral-200 overflow-hidden bg-white">
        <div id="content" class="text-black w-full max-w-360 h-full flex flex-col justify-between gap-24 p-[20px]">
          <h4 class="h4 text-start">creator board XL</h4>
          <div id="details" class="flex flex-col gap-24">
            <p class="p">
              because sometimes bigger is better. expand your creativity.
            </p>
            <div id="ctas" class="flex flex-row gap-4">
              <button class="button text-white bg-black hover:bg-neutral-800 focus:bg-neutral-800 focus-visible:outline-black">
                <span>explore</span>
              </button>
              <button class="button text-black bg-white hover:bg-neutral-200 focus:bg-neutral-200 focus-visible:outline-black">
                <span>buy now</span>
              </button>
            </div>
          </div>
        </div>
        <div id="image-placeholder" class="w-full h-240 min-720:h-full rounded-20 overflow-hidden bg-black/20">
          <img
            src={CreatorBoardXL}
            alt="the creator board XL"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
    <div class="w-full">
      <Marquee>
        <span class="text-neutral-500">
          all work & <s class="text-primary-500">no</s> play - work_louder, inc.
        </span>
      </Marquee>
    </div>
  </section>
</main>

<footer class="w-full flex flex-col justify-center items-center gap-48 pb-24">
  <div id="top" class="w-full flex flex-col justify-center items-center gap-48">
    <Marquee background="primary" speed="fast">
      <span class="text-primary-800">human after all.</span>
    </Marquee>

    <div id="logo-placeholder" class="h-48 aspect-[3] bg-neutral-800">work_louder</div>
  </div>

  <div id="bottom" class="w-full flex flex-col justify-center items-center gap-48 px-24">
    <div class="w-full flex flex-col justify-center items-center gap-24">
      <ul id="site-links" class="w-full flex flex-row justify-center items-center flex-wrap gap-y-12">
        {#each NavLinks as link}
          <li>
            <a href={link.url} class="text-[16px] leading-normal text-neutral-400 hover:text-white focus:text-white px-8 py-4 rounded-full outline-dashed outline-2 outline-transparent outline-offset-2 focus-visible:outline-white">{link.label}</a>
          </li>
        {/each}
      </ul>
      <ul id="social-links" class="w-full flex flex-row justify-center items-center flex-wrap gap-y-12">
        {#each SocialLinks as link}
          <li>
            <a href={link.url} class="text-[16px] leading-normal text-neutral-400 hover:text-white focus:text-white px-8 py-4 rounded-full outline-dashed outline-2 outline-transparent outline-offset-2 focus-visible:outline-white">{link.label}</a>
          </li>
        {/each}
      </ul>
      <ul id="dummy-legal-links" class="w-full flex flex-row justify-center items-center flex-wrap gap-y-12">
        {#each DummyLegalLinks as link}
          <li>
            <a href={link.url} class="text-[16px] leading-normal text-neutral-400 hover:text-white focus:text-white px-8 py-4 rounded-full outline-dashed outline-2 outline-transparent outline-offset-2 focus-visible:outline-white">{link.label}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div id="copyright" class="w-full flex justify-center items-center">
      <small class="small text-neutral-600 text-center w-full">
        <span>&copy;</span> 2024 - work_louder, inc.
      </small>
    </div>
  </div>
</footer>
