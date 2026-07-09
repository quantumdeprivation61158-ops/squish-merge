# Squish Merge — App Store / Income Roadmap

This build is a **premium-feeling web game** with original character art, PWA support, and hooks for mobile packaging. Turning it into App Store income is realistic, but it needs a few business steps beyond the game file.

## What you have now

| Piece | Status |
|--------|--------|
| Core loop (drop / merge / score) | ✅ Polished |
| Original character set (11 tiers) | ✅ Generated + consistent style |
| App icon + splash loading | ✅ |
| Mobile-first UI, safe areas | ✅ |
| Collection, settings, haptics | ✅ |
| Offline PWA cache | ✅ |
| Privacy policy stub | ✅ |
| Free “continue once” (ad hook) | ✅ Ready to swap for rewarded ad |
| Real IAP / ads / accounts | ❌ Not wired (by design until you pick vendors) |

## Path A — Ship as a PWA (fastest)

1. Host the `squish-merge` folder on HTTPS (Netlify, Cloudflare Pages, Vercel, itch.io).
2. Players can **Add to Home Screen** on iOS/Android.
3. Monetize with:
   - Optional tips / Ko-fi
   - itch.io paid download
   - Later: web ads (Careful with privacy)

**Pros:** live this week. **Cons:** less discoverable than App Store.

## Path B — Native wrappers (App Store + Play)

Recommended stack: **Capacitor** (or PWABuilder).

```bash
cd squish-merge
npm run cap:init
# edit app id: com.yourstudio.squishmerge
npm run cap:add:ios      # needs Mac + Xcode
npm run cap:add:android # needs Android Studio
npm run cap:sync
```

Then:

1. Replace privacy contact email.
2. Create screenshots (6.7" iPhone + Android phone).
3. Write store listing copy (see below).
4. Apple Developer ($99/yr) + Google Play ($25 once).
5. Submit for review.

### Monetization options (pick 1–2, don’t overload kids games)

| Model | Fit | Notes |
|--------|-----|--------|
| **Rewarded ads** for Continue | High | Replace `continueRun()` free path with AdMob rewarded |
| **Remove Ads** IAP ($1.99–$3.99) | High | One-time unlock |
| **Cosmetic packs** (skins) | Medium | New art sets sold as IAP |
| **Premium paid app** ($0.99–$2.99) | Medium | No ads; simpler compliance |
| **Battle pass / gacha** | Low (risk) | Easy to feel predatory with cute characters |

**COPPA / kids:** If you market to under-13, use Kids category rules, limited ads, no behavioral targeting. When in doubt, ship as 4+ / Everyone with privacy-first design.

## Store listing draft

**Name:** Squish Merge  
**Subtitle:** Drop, Merge & Soften  
**Keywords:** merge, puzzle, casual, squishy, ASMR, relax, physics, cute  

**Description (short):**  
Drop adorable squishies into the jar. Match sizes to merge and evolve — from tiny Seedlings to legendary Mega Soft. Cozy physics, satisfying combos, and a collectible cast of jelly pals.

## Legal / assets before you charge money

- [ ] Confirm you’re OK commercially using the generated art (your own generation pipeline — keep the source files).
- [ ] Add your legal entity / DBA name on the privacy policy.
- [ ] Support email + age rating questionnaire.
- [ ] If using music later, license it or keep procedural SFX only (current build uses procedural audio — good).

## Product polish still worth doing for reviews

1. **10–15s onboarding** with finger animation (first launch only).  
2. **Daily best** + share score card image.  
3. **Skin themes** (pastel night mode).  
4. **Subtle BGM** loop (licensed or original).  
5. **Achievements** (first Mega Soft, score 5k, full collection).  
6. **Playtest** with 5 people; fix “feels unfair” overflow moments.  
7. **Analytics** only after privacy update (e.g. event: merge_tier, game_over_score).

## Realistic income expectations

Casual merge games can earn from **$0 to meaningful side-income**. Drivers:

- Thumbnail / icon quality (you’re in good shape)
- Soft launch + ASO screenshots
- Retention (daily reason to return)
- Fair ads (rewarded > interstitial spam)

Treat v1 as a **portfolio + soft launch**, then iterate on retention and one monetization path.

## Suggested next build sprint

1. Wire AdMob rewarded continue (Android first).  
2. Add Remove Ads IAP.  
3. Capture 5 store screenshots from a phone frame.  
4. Soft launch on Google Play, then iOS.
