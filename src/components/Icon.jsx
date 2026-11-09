const icons = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/>',
  bag: '<path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  truck: '<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.8 3.1 7.9 7.5 9.5 4.4-1.6 7.5-4.7 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/>',
  return: '<path d="M4 8v5h5"/><path d="M5 12a8 8 0 1 0 2-5"/>',
  message: '<path d="M4 5h16v11H8l-4 4V5Z"/>',
}

function Icon({ name, fill = 'none', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  )
}

export default Icon
