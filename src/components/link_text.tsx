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
        <a style={{ color: '#2563eb' }} href={link}>{id}</a>
      }
  </>
)
export default LinkText