<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * The animation speed of the marquee, denoted by either 'slow' or 'fast'
   */
  type MarqueeSpeed = 'slow' | 'fast';

  export let background: 'transparent' | 'primary' = 'transparent';
  export let speed: MarqueeSpeed = 'fast';

  let marquee: HTMLDivElement;
  let scroller: HTMLUListElement;
  let scrollerContent: Element[];
  let isAnimated: boolean = false;

  function duplicateContent() {}

  onMount(() => {
    scrollerContent = Array.from(scroller.children);

    if (!window.matchMedia('(prefers-reduced-motion: reduce').matches) {
      setTimeout(() => {
        duplicateContent();
        isAnimated = true;
      }, 2000);
    }

    setTimeout(() => {
      marquee.style.visibility = 'visible';
      marquee.style.opacity = '1';
    }, 2000);
  })
</script>

<div
  class={`marquee ${
    background === 'transparent' ? 'bg-transparent'
    : background === 'primary' ? 'bg-primary-500'
    : ''
  }`}
  style="opacity: 0; visibility: hidden;"
  data-is-animated={isAnimated}
  data-speed={speed}
  bind:this={marquee}
>
  <ul
    class="scroller h-full flex justify-center items-center gap-[4em] px-0 py-12"
    bind:this={scroller}
  >
    <li aria-hidden="true">
      <slot />
    </li>
    <li aria-hidden="true">
      <slot />
    </li>
    <li aria-hidden="true">
      <slot />
    </li>
    <li aria-hidden="true">
      <slot />
    </li>
    <li aria-hidden="true">
      <slot />
    </li>
    <li aria-hidden="true">
      <slot />
    </li>
  </ul>
</div>

<style lang="postcss">
  .marquee {
    @apply font-handjet font-bold
    text-[48px] min-600:text-[60px] min-1200:text-[4vw] leading-none
    w-full h-[2em] select-none overflow-hidden;
  }
  .marquee[data-is-animated=true] {
    mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  }
  .marquee[data-is-animated=true] > .scroller {
    @apply will-change-transform w-max;

    animation: playMarquee var(--animation-duration, 40s)
    linear infinite var(--animation-direction, forwards);
  }
  .marquee[data-speed=slow] {
    --animation-duration: 80s;
  }
  .marquee[data-speed=fast] {
    --animation-duration: 40s;
  }
</style>