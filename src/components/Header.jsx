const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-4 text-center">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      {subtitle && <p className="text-sm text-white/70">{subtitle}</p>}
    </div>
  );
};

export default Header;