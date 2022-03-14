---
pageClass: home-page
# some data for the components

name: Zongjie Zhang
profile: /avatar.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/MountainLovers
  - title: zhihu
    icon: "/icons/zhihu.svg"
    link: https://www.zhihu.com/people/zzjzxh

bio: Postgraduate at Peking University
email: zzjzxh@126.com / zongjie.z@stu.pku.edu.cn
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

Currently, I am a postgraduate with the [School of Software and Microelectronics](http://www.ss.pku.edu.cn/), [Peking University](https://www.pku.edu.cn/). Before that, I received my B.S. in information security in 2020 from [Nanjing University of Aeronautics and Astronautics](https://www.nuaa.edu.cn/).

I am interested in the area of **Authentication** and **Deepfake Detection**.


## News

- [Sept 2020] Attended PKU
- [Sept 2016] Attended NUAA


## Education & Experiences

- **Peking University** (2020.09 - Current)
  - Master Candidate of Cyber Security
  - Research focuses on Authentication and Deepfake
  - Supervised by Wenting Li and Haibo Cheng

- **Nanjing University of Aeronautics & Astronautics** (2016.09 - 2020.06) 
  - B.S. in Information Security
  - Supervised by Prof. [Zhu youwen](http://zhuyw.cn/), College of Computer Science and Technology

## Intern

- **Bytedance** (2021.09 - 2022.01)
  - Security Engineer
  - Design and develop a source code leak detection system
  - Multi-server architecture, Simhash, TF-IDF


- **Qi-AnXin** (2021.08 - 2021.09)
  - Software analysis, vulnerability discovery

<Footer> </Footer>

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
