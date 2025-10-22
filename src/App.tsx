import "./App.css";
import {
  ContentFilteredVideo,
  PreferencesDropdown,
  useContentReviewFilterPreferencesFromLocalStorage,
  ContentReviewFilterGlobalPreferencesProvider,

} from "content-review-filters";
import "content-review-filters/style.css"

import * as stylex from '@stylexjs/stylex';
const styles = stylex.create({
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    padding: '2em',
  },
});

function App() {
  const initialPreferences = useContentReviewFilterPreferencesFromLocalStorage({
    DEFAULT: {
      imageBlur: 0.2,
      imageTransparency: 0.2,
      imageGrayscale: true,
      imageSepia: false,
      imageReducedDetail: 0.5,
      imageWarningScreen: false,
      videoBlur: 0.5,
      videoTransparency: 0,
      videoGrayscale: true,
      videoReducedDetail: 1,
      videoSepia: false,
      videoWarningScreen: false,
      videoJumpForwardLength: 5,
      videoJumpBackwardLength: 5,
      videoPlaybackSpeed: 1.5,
      autoMute: false,
    },
    GRAPHIC: {
      imageBlur: 0,
      imageTransparency: 0,
      imageGrayscale: false,
      imageSepia: false,
      imageReducedDetail: 0,
      videoBlur: 0,
      videoTransparency: 0,
      videoGrayscale: false,
      videoReducedDetail: 0,
      videoSepia: false,
      videoWarningScreen: true,
      videoJumpForwardLength: 5,
      videoJumpBackwardLength: 5,
      videoPlaybackSpeed: 2.5,
      imageWarningScreen: true,
      autoMute: false,
    },
  });

  return (
    <>
      <ContentReviewFilterGlobalPreferencesProvider
        initialPreferences={initialPreferences}
      >
        <div {...stylex.props([styles.card, styles.wrapper])}>
        <div>
          <PreferencesDropdown isOpen={true} onClose={() => {}} />
        </div>
        <div>
          <ContentFilteredVideo
            controls
            width="800"
            harmType="GRAPHIC"
            caption="This video may contain graphic content that could be disturbing to some viewers."
          >
            <source src="/example_video.mp4" type="video/mp4" />
          </ContentFilteredVideo>
        </div>
        </div>
      </ContentReviewFilterGlobalPreferencesProvider>
    </>
  );
}

export default App;
