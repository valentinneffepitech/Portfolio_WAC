import HTML from '@/assets/icons/HTML.png'
import CSS from '@/assets/icons/CSS.png'
import Javascript from '@/assets/icons/Javascript.png'
import Php from '@/assets/icons/Php.png'
import ReactPng from '@/assets/icons/React.png'
import NodeJS from '@/assets/icons/NodeJS.png'
import Symfony from '@/assets/icons/Symfony.png'
import Laravel from '@/assets/icons/Laravel.png'
import Wordpress from '@/assets/icons/Wordpress.png'
import Woocommerce from '@/assets/icons/Woocommerce.png'
import SQL from '@/assets/icons/SQL.png'
import Mongo from '@/assets/icons/Mongo.png'
import Docker from '@/assets/icons/Docker.png'
import Websocket from '@/assets/icons/Websocket.png'
import Django from '@/assets/icons/Django.png'
import Spring from '@/assets/icons/Spring.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Icon } from './customs/Icon'

export const CarrousselAccueil = () => {

    const [index, setIndex] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            next()
        }, 5000)
    }, [])

    const next = ()=>setIndex(prev=>{
        if(technos[prev+1]) {
            return prev+1
        } else {
            return 0
        }
    })

    const technos = [
        {
            "id": 2,
            "title": "Php",
            "url": Php
        },
        {
            "id": 3,
            "title": "Javascript",
            "url": Javascript
        },
        {
            "id": 1,
            "title": "HTML",
            "url": HTML
        },
        {
            "id": 4,
            "title": "React",
            "url": ReactPng
        },
        {
            "id": 5,
            "title": "NodeJS",
            "url": NodeJS
        },
        {
            "id": 6,
            "title": "Symfony",
            "url": Symfony
        },
        {
            "id": 7,
            "title": "Laravel",
            "url": Laravel
        },
        {
            "id": 8,
            "title": "Wordpress",
            "url": Wordpress
        },
        {
            "id": 9,
            "title": "Woocommerce",
            "url": Woocommerce
        },
        {
            "id": 10,
            "title": "SQL",
            "url": SQL
        },
        {
            "id": 11,
            "title": "Mongo",
            "url": Mongo
        },
        {
            "id": 12,
            "title": "Docker",
            "url": Docker
        },
        {
            "id": 13,
            "title": "Python",
            "url": Django
        },
        {
            "id": 14,
            "title": "Java",
            "url": Spring
        },
        {
            "id": 16,
            "title": "CSS",
            "url": CSS
        },
        {
            "id": 17,
            "title": "Socket.IO",
            "url": Websocket
        }
    ]

  return (
    <div className='overflow-hidden w-[4/5] flex flex-shrink-0 flex-grow-0' id="accueil_carroussel">
    {
        <Icon datas={technos[index]}/>
    }
    </div>
  )
}
