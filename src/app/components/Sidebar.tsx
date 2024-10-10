"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut, Settings, User, BookHeart, Bell, Newspaper } from 'lucide-react'

const Sidebar = () => {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)  
  }

  return (
    <div className="text-white ml-6">
      <nav>
        <ul className='text-slate-600'>
          <li>
            <Button 
              variant="link" 
              className="text-white-600 text-sm font-bold hover:text-gray-300" 
              onClick={() => handleNavigation('/feed')}
            >
              <Newspaper className='mr-2' />Feed
            </Button>
          </li>
          <li>
            <Button 
              variant="link" 
              className="text-white-600 text-sm font-bold hover:text-gray-300" 
              onClick={() => handleNavigation('/profile')}
            >
              <User className='mr-2' />Perfil
            </Button>
          </li>
          <li>
            <Button 
              variant="link" 
              className="text-white-600 text-sm font-bold hover:text-gray-300" 
              onClick={() => handleNavigation('/notifications')}
            >
              <Bell className='mr-2' />Notificações
            </Button>
          </li>
          <li>
            <Button 
              variant="link" 
              className="text-white-600 text-sm font-bold hover:text-gray-300" 
              onClick={() => handleNavigation('/friends')}
            >
              <BookHeart className='mr-2' />Amigos
            </Button>
          </li>
          <li>
            <Button 
              variant="link" 
              className="text-white-600 text-sm font-bold hover:text-gray-300" 
              onClick={() => handleNavigation('/settings')}
            >
              <Settings className='mr-2' />Configurações
            </Button>
          </li>
          <li>
            <Button 
              variant="link" 
              className="text-white-600 text-sm font-bold hover:text-gray-300" 
              onClick={() => handleNavigation('/exit')}
            >
              <LogOut className='mr-2' />Sair
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
