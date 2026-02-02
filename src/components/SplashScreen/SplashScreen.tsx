interface SplashScreenProps {
  onEnter: () => void
}

export const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  return (
    <div className="splash-screen">
      <h1>Valentine's Day Treasure Map</h1>
      <button onClick={onEnter}>Enter</button>
    </div>
  )
}
