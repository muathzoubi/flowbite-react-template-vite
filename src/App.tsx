import { Button, Card, DarkThemeToggle } from 'flowbite-react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#0000ff', '#0000ff', '#A020F0', '#A020F0    ']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }:any) => remainingTime}
  </CountdownCircleTimer>
);
function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <div className="mode">
        <DarkThemeToggle />
      </div>
      <Card className="max-w-sm ">
        <div className="item-center flex flex-col">
          <div className="countdown">
            <UrgeWithPleasureComponent />
          </div>
          <h1
            className="text-md my-6 dark:text-white"
            style={{ textAlign: 'center' }}
          >
            سوف يتم تحويلك للموقع خلال 7 ثواني او اضغط على زر الأنتقال{' '}
          </h1>
          <a href="#" className="countdown">
            <Button outline gradientDuoTone="purpleToBlue">
              الانتقال للموقع
            </Button>
          </a>
        </div>
      </Card>
    </main>
  );
}

export default App;
