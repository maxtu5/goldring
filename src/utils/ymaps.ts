import React from 'react';
import ReactDom from 'react-dom';

const [ymaps3React] = await Promise.all([ymaps3.import('@yandex/ymaps3-reactify'), ymaps3.ready]);
const default_ui_theme = await import('@yandex/ymaps3-default-ui-theme');

export const reactify = ymaps3React.reactify.bindTo(React, ReactDom);
export const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapListener, YMapDefaultFeaturesLayer, YMapMarker} = reactify.module(ymaps3);
export const {YMapSearchControl, YMapDefaultMarker} = reactify.module(default_ui_theme)