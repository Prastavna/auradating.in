const Features = () => {
  return (
    <div className="uppercase">
      <div className="grid grid-cols-[3rem_1fr] justify-items-center">
        <div className="w-8 h-8 bg-foreground rounded-full"/>
        <div className="text-2xl font-semibold justify-self-start ml-4">
          What's in the store?
        </div>
        <div className="w-2 -mt-1 h-full bg-gradient-to-b from-foreground to-background"/>
        <div className="mt-8 ml-4">
          <ul className="flex flex-col gap-8">
            <li>AI curated matches Aligning with your interestsAI driven matching</li>
            <li>Profile suggestions adaptING to your choices</li>
            <li>Professionally verified profiles only</li>
            <li>Unrivaled profile screening for authenticity</li>
            <li>Find matches based on your favourite spots</li>
            <li>Plan dates at places you both love</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features