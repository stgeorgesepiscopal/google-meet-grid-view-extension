// ==UserScript==
// @name         Google Meet Chat Symbols
// @namespace    https://github.com/sreyemnayr
// @version      2020.3.26
// @description  Adds emoticon buttons to auto-chat them (for little people)
// @author       Ryan Meyers
// @include      https://meet.google.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function() {
  const heartIcon = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>'
  const thumbUpIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.43 8.814c.808-3.283 1.252-8.814-2.197-8.814-1.861 0-2.35 1.668-2.833 3.329-1.971 6.788-5.314 7.342-8.4 7.743v9.928c3.503 0 5.584.729 8.169 1.842 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.649-1.168-2.446-2.594-2.507-1.21-.051-2.87-.277-3.976-.743zm3.718 4.321l-1.394.167s-.609 1.109.141 1.115c0 0 .201.01 1.069-.027 1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.238-.965-4.437-1.934-6.958-2.006v-6c3.263-.749 6.329-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.025 1.455-.051 1.585z"/></svg>'
  const thumbDownIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.406 14.442c1.426-.06 2.594-.858 2.594-2.506 0-1-.986-6.373-1.486-8.25-.714-2.689-2.471-3.686-5.009-3.686-2.283 0-4.079.617-5.336 1.158-2.585 1.113-4.665 1.842-8.169 1.842v9.928c3.086.401 6.43.956 8.4 7.744.483 1.66.972 3.328 2.833 3.328 3.448 0 3.005-5.531 2.196-8.814 1.107-.466 2.767-.692 3.977-.744zm-.207-1.992c-2.749.154-5.06 1.013-6.12 1.556.431 1.747.921 3.462.921 5.533 0 2.505-.781 3.666-1.679.574-1.993-6.859-5.057-8.364-8.321-9.113v-6c2.521-.072 4.72-1.041 6.959-2.005 1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062 1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078 1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.874 1.028-.141 1.115l1.394.167c1.075.13 1.105 1.526.05 1.585z"/></svg>'
  const questionIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm1.024 13.975c0 .566-.458 1.025-1.024 1.025-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024zm1.141-8.192c-.498-.505-1.241-.783-2.09-.783-1.786 0-2.941 1.271-2.941 3.237h1.647c0-1.217.68-1.649 1.261-1.649.519 0 1.07.345 1.117 1.004.052.694-.319 1.046-.788 1.493-1.157 1.1-1.179 1.633-1.173 2.842h1.643c-.01-.544.025-.986.766-1.785.555-.598 1.245-1.342 1.259-2.477.008-.758-.233-1.409-.701-1.882z"/></svg>'
  
  const heartEmoji = '♥️'
  const thumbUpEmoji = '👍'
  const thumbDownEmoji = '👎'
  const questionEmoji = '❓'
  const cancelEmoji = '💨' 

  // Create the styles we need
  const s = document.createElement('style')
  s.innerText =
    ''
  document.body.append(s)

  // Find the video container
  let runInterval = null
  let container = null
  let toggleButton = null
  
  // Watch for changes in chat
  // If chat message is one of the icon codes, put icon next to name and set timer to remove it after 15s
  
/*

  // Define toggle functions
  const enableGridMode = () => {
    // This continually probes the number of participants & screen size to ensure videos are max possible size regardless of window layout
    runInterval = setInterval(() => {
      const w = innerWidth / 16
      const h = (innerHeight - 48) / 9
      const n = container.children.length
      let size = 0
      let col
      for (col = 1; col < 9; col++) {
        let s = Math.min(w / col, h / Math.ceil(n / col))
        if (s < size) {
          col--
          break
        }
        size = s
      }
      container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
    }, 250)
    container.classList.add('__gmeet-vid-container')
    toggleButton.innerHTML = gridOn
  }
  const disableGridMode = () => {
    clearInterval(runInterval)
    container.classList.remove('__gmeet-vid-container')
    toggleButton.innerHTML = gridOff
    runInterval = null
  }
  const toggleGridMode = () => {
    runInterval ? disableGridMode() : enableGridMode()
  }

  // Make the button to perform the toggle
  // This runs on a loop since you can join/leave the meeting repeatedly without changing the page
  setInterval(() => {
    const ownVideoPreview = document.querySelector('[data-fps-request-screencast-cap]')
    const participantVideo = document.querySelector('[data-participant-id]')
    if (!ownVideoPreview || ownVideoPreview.__grid_ran || !participantVideo) return
    container = participantVideo.parentElement
    ownVideoPreview.__grid_ran = true

    const buttons = ownVideoPreview.parentElement.parentElement.parentElement
    buttons.prepend(buttons.children[1].cloneNode())

    toggleButton = document.createElement('div')
    toggleButton.classList = buttons.children[1].classList
    toggleButton.style.display = 'flex'
    toggleButton.innerHTML = gridOff
    toggleButton.onclick = toggleGridMode
    buttons.prepend(toggleButton)

    if (window.default_MeetingsUi) {
      for (let v of Object.values(window.default_MeetingsUi)) {
        if (v && v.prototype) {
          const p = Object.getOwnPropertyDescriptor(v.prototype, 'Aa')
          if (p && p.value && p.value.toString().includes('this.La.get')) {
            if (!v.prototype.Aa.__grid_ran) {
              console.log('[google-meet-grid-view] Successfully hooked into rendering pipeline')
              const p = new Proxy(v.prototype.Aa, RefreshVideoProxyHandler)
              p.__grid_ran = true
              v.prototype.Aa = p
            }
          }
        }
      }
    }
  }, 250)

  const LayoutVideoProxyHandler = Lv => ({
    get: function(target, name) {
      let ret = Reflect.get(target, name)
      if (typeof ret === 'function') {
        ret = ret.bind(target)
      }

      if (runInterval && name == 'get') {
        return idx => ({
          Aa: Ba => {
            try {
              return GridLayout.call(Lv, Ba)
            } catch (e) {
              console.error(e)
              return ret(idx).Aa(Ba)
            }
          },
        })
      }

      return ret
    },
  })

  RefreshVideoProxyHandler = {
    apply: function(target, thisArg, argumentsList) {
      if (!thisArg.La.__grid_ran) {
        const p = new Proxy(thisArg.La, LayoutVideoProxyHandler(thisArg))
        p.__grid_ran = true
        thisArg.La = p
      }
      return target.apply(thisArg, argumentsList)
    },
  }

  // Used to forcibly load every video frame
  function GridLayout(orderingInput) {
    const VideoList = orderingInput.constructor
    const VideoElem = Object.values(window.default_MeetingsUi)
      .filter(i => typeof i === 'function')
      .filter(i => i.toString().includes('.attribution'))[0]

    const magicKey = Object.entries(new VideoElem(999)).find(e => e[1] === 999)[0]

    const addUniqueVideoElem = (a, b, c) => {
      if (b && !a.some(e => e[magicKey] === b)) {
        const d = new VideoElem(b, { attribution: true })
        if (c) c(d)
        a.push(d)
      }
    }
    const isSpacesStr = i => typeof i === 'string' && i.startsWith('spaces/')

    // magicSet(true) enables the "You're presenting to everyone" screen
    // magicSet(1 || 2) ensures multiple screens can be shown. Unsure the difference between 1 and 2
    const magicSet = val => {
      return elem => {
        for (const [k, v] of Object.entries(elem)) {
          if (typeof v === typeof val && k !== 'attribution') {
            elem[k] = val
          }
        }
      }
    }

    let newBa, importantObject
    for (let v of Object.values(this)) {
      if (v && typeof v === 'object') {
        for (let vv of Object.values(v)) {
          if (Array.isArray(vv) && vv.length && vv.every(isSpacesStr)) {
            if (newBa && vv != newBa) {
              console.log('Invalid newBa search!', newBa, vv)
              throw new Error('Failed')
            } else {
              newBa = vv
              importantObject = v
            }
          }
        }
      }
    }

    let videoMap
    for (let v of Object.values(importantObject)) {
      if (v instanceof Map && v.size && Array.from(v.keys()).every(isSpacesStr)) {
        videoMap = v
      }
    }

    let ownVideo = null
    for (let v of Object.values(importantObject)) {
      if (v && typeof v === 'object' && v['$goog_Thenable']) {
        for (let vv of Object.values(v)) {
          if (isSpacesStr(vv)) {
            ownVideo = videoMap.get(vv) || null
          }
        }
      }
    }

    let ret = []
    // TODO: Google meets also injects two other video elements here
    // I suspect one of them is the presenter?
    for (const v of newBa) {
      addUniqueVideoElem(ret, videoMap.get(v), magicSet(2))
    }
    if (!ret.length) {
      addUniqueVideoElem(ret, ownVideo, magicSet(true))
    }

    ret.sort((a,b) => a[magicKey].name.localeCompare(b[magicKey].name))
    magicSet(0)(ret[0])

    // Build a video list from the ordered output
    return new VideoList(ret)
  }
  */
})()
