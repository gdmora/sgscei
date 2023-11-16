﻿import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import BadgeIcon from '@mui/icons-material/Badge';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimerIcon from '@mui/icons-material/Timer';

export const SidebarData = [
    {
        id: 1,
        titulo: 'Inicio',
        path: '/',

        icon: <HomeIcon sx={{ color: 'white' }} />
    },
    {
        id: 2,
        titulo: 'Solicitudes',
        path: '/solicitudes',
        icon: <FileCopyIcon sx={{ color: 'white' }} />

    },
    
    {
        id: 4,
        titulo: 'Usuarios',
        path: '/usuarios',
        icon: <GroupIcon sx={{ color: 'white' }} />


    }, {
        id: 5,
        titulo: 'Permisos',
        path: '/permisos',
        icon: <LockPersonIcon sx={{ color: 'white' }} />

    },
    {
        id: 6,
        titulo: 'Roles',
        path: '/roles',
        icon: <BadgeIcon sx={{ color: 'white' }} />

    },
    {
        id: 7,
        titulo: 'Especialidades',
        path: '/especialidades',
        icon: <PsychologyIcon sx={{ color: 'white' }} />

    },
    {
        id: 8,
        titulo: 'Plazos de Solicitudes',
        path: '/plazosSolicitudes',
        icon: <TimerIcon sx={{ color: 'white' }} />

    }


]


/*

{
        id: 3,
        titulo: 'Consultas',
        path: '/Consultas',
        icon: <ArticleIcon sx={{ color: 'white' }} />

    },

*/