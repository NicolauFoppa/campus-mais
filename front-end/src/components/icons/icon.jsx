// src/components/Icon/Icon.jsx

import React from 'react';

// 1. Importamos TODAS as imagens de ícones da nossa pasta organizada.
//    Garanta que os nomes dos arquivos aqui correspondem aos nomes na sua pasta.
import bookIcon from '../../assets/icons/book_icon.png';
import chevronDownIcon from '../../assets/icons/chevron_down.png';
import coffeeIcon from '../../assets/icons/coffee_icon.png';
import dollarIcon from '../../assets/icons/dolar_icon.png';
import fileIcon from '../../assets/icons/file_icon.png';
import homeIcon from '../../assets/icons/home_icon.png';
import listIcon from '../../assets/icons/list_icon.png'; // Exemplo

// 2. Criamos um "mapa" de nomes para as imagens.
//    O nome que usamos aqui (ex: "book") será o que passaremos na prop "name".
const iconMap = {
    book: bookIcon,
    chevronDown: chevronDownIcon,
    coffee: coffeeIcon,
    dollar: dollarIcon,
    file: fileIcon,
    home: homeIcon,
    list: listIcon
};

// 3. Este é o nosso componente reutilizável!
export const Icon = ({ name, size = 48, className }) => {
    // Ele busca a imagem correta no mapa com base no nome recebido.
    const iconSrc = iconMap[name];

    // Se um nome de ícone inválido for passado, ele não renderiza nada e avisa no console.
    if (!iconSrc) {
        console.warn(`[Icon Component] Ícone "${name}" não foi encontrado no iconMap.`);
        return null;
    }

    // Define o tamanho da imagem dinamicamente via props.
    const style = {
        width: `${size}px`,
        height: `${size}px`,
    };

    // Renderiza apenas a imagem, que é tudo que precisamos.
    return (
        <img
            src={iconSrc}
            alt={`${name} icon`}
            className={className} // A classe externa é usada para posicionamento.
            style={style}
        />
    );
};