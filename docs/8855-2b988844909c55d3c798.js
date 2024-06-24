"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[8855],{8855:function(n,e,t){t.r(e),e.default="import React, {\n  ComponentPropsWithRef,\n  useCallback,\n  useEffect,\n  useState\n} from 'react'\nimport { EmblaCarouselType } from 'embla-carousel'\n\ntype UseDotButtonType = {\n  selectedIndex: number\n  scrollSnaps: number[]\n  onDotButtonClick: (index: number) => void\n}\n\nexport const useDotButton = (\n  emblaApi: EmblaCarouselType | undefined,\n  /*__NAV_AUTOPLAY_REPLACE_START__*/\n  onButtonClick?: (emblaApi: EmblaCarouselType) => void\n  /*__NAV_AUTOPLAY_REPLACE_END__*/\n): UseDotButtonType => {\n  const [selectedIndex, setSelectedIndex] = useState(0)\n  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])\n\n  const onDotButtonClick = useCallback(\n    (index: number) => {\n      if (!emblaApi) return\n      emblaApi.scrollTo(index)\n      /*__NAV_AUTOPLAY_REPLACE_START__*/\n      if (onButtonClick) onButtonClick(emblaApi)\n      /*__NAV_AUTOPLAY_REPLACE_END__*/\n    },\n    [\n      emblaApi,\n      /*__NAV_AUTOPLAY_REPLACE_START__*/ onButtonClick /*__NAV_AUTOPLAY_REPLACE_END__*/\n    ]\n  )\n\n  const onInit = useCallback((emblaApi: EmblaCarouselType) => {\n    setScrollSnaps(emblaApi.scrollSnapList())\n  }, [])\n\n  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {\n    setSelectedIndex(emblaApi.selectedScrollSnap())\n  }, [])\n\n  useEffect(() => {\n    if (!emblaApi) return\n\n    onInit(emblaApi)\n    onSelect(emblaApi)\n    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)\n  }, [emblaApi, onInit, onSelect])\n\n  return {\n    selectedIndex,\n    scrollSnaps,\n    onDotButtonClick\n  }\n}\n\ntype PropType = ComponentPropsWithRef<'button'>\n\nexport const DotButton: React.FC<PropType> = (props) => {\n  const { children, ...restProps } = props\n\n  return (\n    <button type=\"button\" {...restProps}>\n      {children}\n    </button>\n  )\n}\n"}}]);
//# sourceMappingURL=8855-2b988844909c55d3c798.js.map