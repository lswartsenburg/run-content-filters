# Content Review Filters

This repository contains a collection of React components to enable developers to integrate content filters and settings in content review tools.

These components support the following image and video filters:

- Blur
- Black & White
- Sepia (i.e. yellow tint)
- Transparency
- Reduced detail (i.e. make the content appear like an illustration)
- Warning screens (i.e. show a warning if content is predicted to be graphic)

Note: the reduced detail filter uses WebGL to apply shaders to images or videos to make them appear as an illustration.The warning screen filter requires integration of your own AI model for content detection - you can build your own model, write a prompt for an LLM, or use an off-the-shelf solution from Trust & Safety or image recognition/Content Understanding AI vendors.

Additionally, this repository provides a custom video player that allows users to set preferences for default playback speed, to skip forwards and backwards in a video, and to adjust the default audio volume.

There are multiple ways of integrating these components into your own tool, depending on how much customization you would like:

- Option A (easiest, least customizable): use provided `ContentFilteredImage` and `ContentFilteredVideo` components to render your image/video, with out-of-the box controls.
- Option B (harder, more customizable): use `ContentFilteredImageWrapper` and `ContentFilteredVideoWrapper` to wrap an HTML `img` or `video` tag within your own custom image viewer or video player. Use `ContentFilterContextProvider` to write the state of each filter (enabled/disabled), which will then be read by the aforementioned wrapper components to apply the filters. We provide each control button from Option A as a separate component, allowing you to arrange these as you need or to override styles and icons to fit the theme of your application.

In addition to the filters described above, this repository includes:

- An example settings menu component for users to configure the preferences. By default, this writes to local storage in the browser, enabling you to integrate this easily without having to make server side changes. For settings to persist across devices, we recommend syncing this state with a server-side database.
- A demonstration Express.js server showing you how you might persist the preferences and write a service to predict the content type of each piece of content.

While this repository only contains React implementations of these filters, we welcome contributions of equivalent components for other web frameworks. We also welcome other contributions to continue to improve these tools.
