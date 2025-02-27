interface TextLink{ 
  id: string
  link?: string
}

const LinkText:React.FC<TextLink> = (
  {id, link}
) => (
  <>  
      {
        link === undefined?	
        id
        :
        <a style={{ color: 'rgba(37, 99, 235, 1)' }} href={link}>{id}</a>
      }
  </>
)
export default LinkText