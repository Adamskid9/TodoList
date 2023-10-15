function GlowEffect({top,left,right,bottom}) {
    const style = {
        height: '6rem',
        width: '6rem',
        borderRadius: '50%',
        backgroundColor: '#4b8e90',
        filter: 'blur(3rem)',
        position: 'absolute',
        zIndex: '-1',
        top: `${top}rem`,
        left: `${left}rem`,
        right: `${right}rem`,
        bottom: `${bottom}rem`,
    }
    return <div style={style} ></div> 
  
}

export default GlowEffect
