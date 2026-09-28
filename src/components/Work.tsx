import { agentSteps, bigFreezeStats } from '../content'
import { HoloboxVideo } from './HoloboxVideo'

export function Work({ onPlayClip }: { onPlayClip: () => void }) {
  return (
    <section id="work" className="work section">
      <div className="section__head">
        <div>
          <p className="kicker" data-reveal>Selected work</p>
          <h2 className="display-2" data-split>Four projects, all live.</h2>
        </div>
        <p className="muted" data-reveal>2024 to now</p>
      </div>

      <article className="panel panel--feature" data-clip>
        <a className="panel__frame" href="/images/big-freeze.jpg" target="_blank" rel="noreferrer" data-cursor="View">
          <picture>
            <source type="image/webp" srcSet="/images/big-freeze.webp" />
            <img
              className="panel__media"
              src="/images/big-freeze.jpg"
              width={1280}
              height={720}
              loading="lazy"
              alt="Big Freeze Digital Beanie results: $2.5M revenue with 49% year-on-year growth, 59,085 transactions, 36,000 new supporters to FightMND, 57% website conversion to purchase, $1M of revenue from 44,062 supporters buying one digital beanie, and $189K of corporate box purchases. Opens full size."
            />
          </picture>
        </a>
        <div className="panel__body panel__body--split">
          <div className="panel__intro">
            <p className="panel__meta"><span className="panel__index">01</span>FightMND · built at Slik</p>
            <h3 className="display-3">Big Freeze Digital Beanie</h3>
            <p className="panel__text">
              The purchase site for FightMND's digital beanie: checkout, Stripe payments and supporter data, built to
              hold up when the campaign hit TV.
            </p>
            <p className="panel__meta">React · TypeScript · Stripe · Netlify</p>
          </div>
          <dl className="stats">
            {bigFreezeStats.map((s) => (
              <div key={s.label} className="stat">
                <dt className="stat__label">{s.label}</dt>
                <dd
                  className="stat__value"
                  data-count={s.to}
                  data-prefix={s.prefix}
                  data-suffix={s.suffix}
                  data-decimals={s.decimals}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      <article className="panel panel--dark panel--holobox" data-clip>
        <div className="panel__body">
          <p className="panel__meta"><span className="panel__index">02</span>Slik · in-house product</p>
          <h3 className="display-3">SLIK Holobox</h3>
          <p className="panel__text">
            Interactive experiences for a life-size holographic display used in brand activations. Motion detection
            turns whoever is standing in front of it into the controller.
          </p>
          <p className="panel__meta">Motion detection · Real-time 3D</p>
          <button type="button" className="pill pill--light play" onClick={onPlayClip} data-magnetic>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 6v4h3l4 3V3L5 6H2z" />
              <path d="M11.5 5.5a3.5 3.5 0 0 1 0 5" />
            </svg>
            Watch with sound
          </button>
        </div>
        <div className="panel__video">
          <HoloboxVideo onOpen={onPlayClip} />
        </div>
      </article>

      <div className="panel-row">
        <article className="panel panel--card" data-reveal>
          <div className="panel__placeholder">Screenshot or clip of the heritage AR app</div>
          <div className="panel__body panel__body--card">
            <p className="panel__meta"><span className="panel__index">03</span>NT Government · built at Slik</p>
            <h3 className="display-4">Heritage AR app</h3>
            <p className="panel__text">
              Lead developer through to App Store and Play Store release. Bluetooth beacons and geolocation trigger
              content on site, and more locations are in production.
            </p>
            <p className="panel__meta">Unity · C# · AR Foundation · BLE beacons</p>
          </div>
        </article>

        <article className="panel panel--card panel--peach" data-reveal>
          <ol className="flow">
            {agentSteps.map((step, i) => (
              <li key={step} className="flow__step">
                <span className="flow__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="flow__label">{step}</span>
              </li>
            ))}
          </ol>
          <div className="panel__body panel__body--card">
            <p className="panel__meta"><span className="panel__index">04</span>Slik · internal tooling</p>
            <h3 className="display-4">Slack-to-VM AI agent</h3>
            <p className="panel__text">
              Anyone on the team can ask for a code change in Slack. Routine changes come back as a tested pull
              request, without a developer having to start them.
            </p>
            <p className="panel__meta">Python · AI agents · Slack API · GitHub Actions</p>
          </div>
        </article>
      </div>
    </section>
  )
}
