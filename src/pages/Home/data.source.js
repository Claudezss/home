import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08003a6a-b3ee-4cab-8440-bba1b7f3d21e/d482lwp-ebf27c1c-d477-4051-967e-f58b3ee2e793.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDgwMDNhNmEtYjNlZS00Y2FiLTg0NDAtYmJhMWI3ZjNkMjFlXC9kNDgybHdwLWViZjI3YzFjLWQ0NzctNDA1MS05NjdlLWY1OGIzZWUyZTc5My5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4CcRv_kNEffB9ToIyltl4Afw7RWPcLuq37D5cd8qaSg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: 'Home', name: 'text' }],
        },
        subItem: [
        ],
      }
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://claudezss.github.io/blog/assets/img/me.jpeg',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                'Junior Software Developer in Opus One Solutions, Electrical Engineer EIT',
              className: 'teams0-content',
            },
            { name: 'title', children: 'Yan (Claude) Zhang', className: 'teams0-h1' },

          ],
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: 'Education / Work Experiences', className: 'h4' },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://communications.uwo.ca/comms/img/logo_teasers/Stacked.gif',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: 'University of Western Ontario' },
          post: { className: 'block-post', children: 'Bachelor' },
          time: { className: 'block-time', children: '2013 - 2017' },
          title: { className: 'block-title', children: 'Bachelor of Engineering Science - Electrical Enginerring' },
          content: { className: 'block-content', children: <div>- power system <br/>- wireless communication<br/>- programming</div>},
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://banner2.cleanpng.com/20180419/vce/kisspng-shipping-container-freight-transport-logo-brand-passenger-ship-5ad85c94a013c2.7550346815241289166557.jpg',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: 'GreenfieldSCM' },
          post: { className: 'block-post', children: 'Supply Chain Management' },
          time: { className: 'block-time', children: '2017 - 2019' },
          title: { className: 'block-title', children: 'Full Stack Developer' },
          content: {
            className: 'block-content',
            children:
              'Developed Visualized Supply Chain Management System',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://media-exp1.licdn.com/dms/image/C4E0BAQFzZnwz_oD4Ow/company-logo_200_200/0/1546815564697?e=1623283200&v=beta&t=dguNeXM5QwnKz1lhU_MnG1KCCrwwWDuHEJT3O1IDgxc',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: 'Opus One Solutions' },
          post: { className: 'block-post', children: 'Power Flow Optimization' },
          time: { className: 'block-time', children: '2019 - present' },
          title: { className: 'block-title', children: 'Junior Software Developer' },
          content: {
            className: 'block-content',
            children:
              <div>
                - Developed Test Harness to validate optimal power flow result<br/><br/>
                - Build/Improve DERs models<br/><br/>
                - Optimize Power Flow by different objectives (GAMS)
              </div>,
          },
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Skills / Hobbies',
        className: 'title-h1',
      },
      { name: 'content', children: '' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'Technical Skills', className: 'content7-tag-name' },
          icon: { children: 'bug' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>Python</h3>
                <p>
                  Flask, Django, Celery, JWT, Pytest, Sqlalchemy...
                </p>
                <br />
                <h3>React</h3>
                <p>
                  React Redux, React Router, Antd, Umijs...
                </p>
                <br />
                <h3>
                  Devops
                </h3>
                <p>K8S, AWS, DO, GCP, Nginx, Docker, Ingress...</p>
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'coffee' },
          text: { className: 'content7-tag-name', children: 'Hobbies' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>Guitar</h3>
                <p>
                  Finger Style
                </p>
                <br />
                <h3>Ancient Poetry</h3>

                <br />
                <h3>
                 Video Gams
                </h3> PS4, Switch, Steam
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://static.vecteezy.com/system/resources/thumbnails/001/208/176/small/guitar.png',
          },
        },
      },
    ],
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [

      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line',
      },
      {
        name: 'copyright',
        children: 'Copyright © Yan Zhang',
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/yan-zhang-a21428113/',
        target: '_blank',
        className: 'links-Linkedin',
        children: 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg',

      },
      {
        name: 'github',
        href: 'https://github.com/Claudezss',
        target: '_blank',
        className: 'links-github',
        children: 'https://image.flaticon.com/icons/png/512/25/25231.png'
          },
    ],
  },
};
