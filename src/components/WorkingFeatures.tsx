const features = [
    {
        name: 'Reacting in real-time',
        description: "I'm working made this tool work in real-time. When creators are doing a live stream. Via Youtube and Twitch.",
        status: 'wip',
    },
    {
        name: 'Multiple pauses in the reaction video',
        description: 'I want to add the possibility to pause the video and play it many times in the reactions. So the creators can pause the video when they are talking',
        status: 'wip',
    },
    {
        name: 'Allow reactions from Netflix',
        description: 'I want to add the possibility to react to Netflix shows.',
        status: 'wip',
    },
    {
        name: 'Allow reactions from Prime Video',
        description: 'I want to add the possibility to react to Prime Video shows.',
        status: 'wip',
    },
    {
        name: 'Allow reactions from Disney+',
        description: 'I want to add the possibility to react to Disney+ shows.',
        status: 'wip',
    },
    {
        name: 'Allow reactions from Youtube',
        description: 'I want to add the possibility to react to Youtube videos.',
        status: 'wip',
    },
    {
        name: 'Reaction Free Record',
        description: 'A new extension to record the reaction video timestamps. So the creators can save the timestamp when they pause and play the show when they are recording the reaction videos.',
        status: 'wip',
    },
    {
        name: 'New UI for the extension',
        description: "I'm working on a new UI for the extension. Allow to move the floating reaction or resize it.",
        status: 'wip',
    },
]

export default function WorkingFeatures() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-[#2f6b2f]">Our Roadmap</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Working on new features</p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            The Reaction Free roadmap is public and available to everyone. You can see what we are working on and what we are planning to work on. We are always open to feedback and suggestions.
                        </p>
                    </div>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="font-semibold text-gray-900">
                                    <span className="absolute left-0 top-1 h-5 w-5" aria-hidden="true">
                                      {
                                            feature.status === 'wip' && '🚧'
                                      }
                                    </span>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
