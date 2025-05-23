import React from 'react'
import Image from 'next/image'
import useDarkMode from '@fisch0920/use-dark-mode'

const ImageApp = ({
  className,
  src,
  srcDark,
  alt,
  size,
  priority,
  objectFit = 'contain',
}) => {
  const darkMode = useDarkMode(false)

  return (
    <div className={className} style={{ ...size, position: 'relative' }}>
      <Image
        src={darkMode.value && srcDark ? srcDark : src}
        alt={alt}
        layout="fill"
        quality={60}
        objectFit={objectFit}
        placeholder="blur"
        blurDataURL={`${src}?auto=format,compress&q=1&blur=500&w=2`}
        priority={priority}
      />
    </div>
  )
}

export default ImageApp
