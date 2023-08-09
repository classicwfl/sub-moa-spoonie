import Image from "next/image";
import Hero from "@/components/hero";
import Section from "@/components/section";
import SectionInner from "@/components/sectioninner";
import SideBySide from "@/components/sidebyside";
import Pg from "@/components/pg";
import InnerHead from "@/components/innerhead";
import TLink from "@/components/tlink";
import Button from "@/components/button";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="max-w-big m-auto mt-30">
                <div className="max-w-lg z-20 m-auto">
                    <Section id="intro">
                        <h1 className="font-bighead uppercase text-center italic">
                            <span className="text-3xl md:text-6xl block leading-neg">Become A</span>
                            <span className="text-6xl md:text-8xl block leading-neg">Sub-MOA</span>
                            <span className="text-7xl md:text-9xl block leading-neg">Spoonie</span>
                        </h1>
                        <span className="text-3xl lg:text-6xl font-bighead uppercase leading-neg text-center block italic">Precision, Pain & Pride</span>
                    </Section>
                </div>
                <Section id="what">
                    <SectionInner>
                        <SideBySide heading="What's a Sub-MOA Spoonie?">
                        <Pg><span className="text-3xl"><strong>MOA:</strong> <em>A unit of measurement in precision shooting, 1 MOA (Minute of Angle) equals just over 1 inch (1.047") at 100 yards.</em></span></Pg>

                        <Pg><span className="text-3xl"><strong>Spoonie:</strong> <em>A person who suffers from chronic illness.</em></span></Pg>

                        <Pg><span className="text-3xl"><strong>Sub-MOA Spoonie:</strong> <em>A spoonie who can shoot groups less than 1 MOA.</em></span></Pg>

                        <Pg>Look, being a spoonie is hard. You don't get to celebrate many accomplishments like a normie would, and having the same successes as a normie? Yeah, that's not always gonna happen.</Pg>

                        <Pg>Well, one success I have is I am a pretty decent shot with a 22 rifle, which is why I came up with the Sub-MOA Spoonie badge.</Pg>

                        <Pg>If you're also a Sub-MOA Spoonie, then this badge is for you, too.</Pg>

                        <Pg>Celebrate your wins, my fellow spoonies, because we've earned them.</Pg>
                        </SideBySide>
                    </SectionInner>
                </Section>
                <Section id="challenge">
                    <SectionInner>
                        <SideBySide heading="Take the Sub-MOA Spoonie Challenge!">
                        <Pg>The Sub-MOA Spoonie Challenge is a lot like traditional benchrest target challenges; Print out this <TLink link="/SubMOASpoonieChallenge-PRINT.pdf" target="_blank">target sheet</TLink>, post it up (50 yards for 22LR, 100 yards for longer range calibers), and follow the instructions at the top!</Pg>

                        <InnerHead>Get the Sub-MOA Spoonie Morale Patch</InnerHead>

                        <Pg>Once you've completed 5 sub-MOA shots in a row, all you need to do to get on the list for a morale patch is to send a photo of your target sheet to <TLink link="mailto:submoaspoonie@gmail.com">submoaspoonie@gmail.com</TLink> - I'll confirm the groups, and once the morale patches are ready I'll reach out to collect payment ($10) and your shipping address, and your patch will be on the way (US folks only for the time being, sorry)!</Pg>

                        <Pg>If you don't want a morale patch, you can get the Sub-MOA Spoonie badge on a variety of other merch. The Sub-MOA Spoonie morale patch, however, is unique and available in limited quantities exclusively to those who complete the target challenge!</Pg>

                        <InnerHead>SHARE YOUR SPOONIE STORY</InnerHead>

                        <Pg>Sometimes it helps other spoonies to hear what their fellow spoonies live with. When you send in your groups, let me know if you're interested in being interviewed (via email, so you can respond on your own time). We'll talk about your illness, your struggles, and how you became a Sub-MOA Spoonie!</Pg>

                        <Pg>You can read the Sub-MOA Spoonie stories over at <TLink link="https://painpropaganda.com"  target="_blank">Pain Propaganda</TLink>.</Pg>
                        </SideBySide>
                    </SectionInner>
                </Section>
                <Section id="merch">
                    <SectionInner>
                        <SideBySide heading="Sub-MOA Spoonie Merch">
                            <Pg>Don't want a morale patch, or want to get even more Sub-MOA Spoonie stuff?</Pg>

                            <Pg><strong>No problem!</strong></Pg>

                            <Pg>The Sub-MOA Spoonie logo is available on clothes, pins, mugs and more!</Pg>

                            <Button link="https://www.redbubble.com/shop/ap/149883808" target="_blank">Get Sub-MOA Spoonie Merch</Button>
                        </SideBySide>
                    </SectionInner>
                </Section>
                <Section id="other">
                    <SectionInner>
                        <SideBySide heading="Other Stuff">
                            <Pg>Spoonies know better than most that a good advocacy group can make a real difference, and I want to recognize a few that you might be interested to learn more about.</Pg>

                            <Pg><TLink link="https://www.holdmyguns.org/" target="_blank">Hold My Guns</TLink>: A way to have your firearms secured temporarily while on vacation or during a crisis.</Pg>

                            <Pg><TLink link="https://socialistra.org/" target="_blank">Socialist Rifle Association</TLink>: A leftist counterpart to the NRA, the SRA is a smaller, more grass-roots organization.</Pg>

                            <Pg><TLink link="https://psjbgc.org/" target="_blank">John Brown Gun Club</TLink>: Another leftist gun rights organization advocating for racial equality and social justice.</Pg>
                        </SideBySide>
                    </SectionInner>
                </Section>
                <Section id="footer">
                    <SectionInner>
                        <div className="text-center">
                            <Pg>All content &copy; 2023 Will Leffert unless otherwise noted, All Rights Reserved.</Pg>
                        </div>
                    </SectionInner>
                </Section>
            </div>
        </>
    );
}