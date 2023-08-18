import Pg from "./pg";

type Props = {
    children: React.ReactNode,
    heading: string,
}

function FAQItem({children, heading}: Props ) {
    return (
        <div className="group mb-5 w-full">
            <div className="flex justify-between gap-2 mb-2">
                <h3 className="font-bighead uppercase italic text-3xl block leading-neg shrink">{heading}</h3>
                <button className="font-bighead text-3xl group-focus-within:opacity-0 opacity-100 transition-all duration-300 min-w-[48px] w-12 block"><span className="hidden">Expand FAQ Item</span>+</button>
            </div>
            
            <div className="group-focus-within:max-h-[1000px] max-h-0 overflow-hidden transition-all duration-300">
                {children}
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <div className="flex flex-col gap-2 w-full">
            <FAQItem heading="Do you have to hit each circle in a row, or can you just use one circle for all 5 shots?">
                <Pg>Whatever you prefer!</Pg>
                <Pg>I myself shot all mine in a single circle so I could do a simple group size calculation in Ballistic-X, but you may be more comfortable shooting a series rather than a single (plus, it makes spotting impacts easier)!</Pg>
            </FAQItem>
            <FAQItem heading="How do you determine if a shot is 'in'?">
                <Pg>First off: Unlike PRS Benchest targets, you count the shot if the CENTER OF THE IMPACT is within the circle; it&apos;s perfectly OK to break the line!</Pg>
                <Pg>More specifically, you&apos;ll note that if you measure it, the inside portion of the outer circle is 1 MOA wide, so as long as the center of your impact is within the appropriate circle for your distance, you can count it!</Pg>
            </FAQItem>
            <FAQItem heading="When will the patches be ready?">
                <Pg>It depends on interest and embroidery costs when it comes time to order. I won&apos;t order them until I get at least 10 folks interested in the patches; that won&apos;t be enough to cover the entire costs, but it will be enough to justify the first run and ship them!</Pg>
            </FAQItem>
            <FAQItem heading="What are the details on the patches?">
                <Pg>The patches will be a 2.5 inch circle with hook & loop backing; I chose this size because it should be usable in a variety of locations (hats, bags, shoulder patches, etc), and is reasonable to get embroidered. These will be fully-embroidered, too, and not printed or PVC.</Pg>
            </FAQItem>
            <FAQItem heading="What is in place to prevent folks from cheating?">
                <Pg>A whole &apos;lotta nuthin&apos;.</Pg>
                <Pg>Seriously though, if you&apos;re a spoonie you most likely want to feel a legit sense of accomplishment, rather than a false one, so I don&apos;t expect many folks to cheat here. This is a pretty small niche, so the likelihood of there being a run on patches going to a bunch of cheaters is pretty slim.</Pg>
            </FAQItem>
        </div>
    )
}