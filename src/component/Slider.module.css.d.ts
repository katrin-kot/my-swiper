declare namespace SliderModuleCssNamespace {
  export interface ISliderModuleCss {
    active: string;
    arrow: string;
    hidden: string;
    next: string;
    notransition: string;
    prev: string;
    slide: string;
    slideCaption: string;
    slider: string;
    sliderIndicators: string;
    sliderWrapper: string;
  }
}

declare const SliderModuleCssModule: SliderModuleCssNamespace.ISliderModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SliderModuleCssNamespace.ISliderModuleCss;
};

export = SliderModuleCssModule;
