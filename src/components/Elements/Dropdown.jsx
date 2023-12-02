export default function Dropdown() {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1">
        GMT +7
      </div>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a>GMT +8</a>
        </li>
        <li>
          <a>GMT +9</a>
        </li>
      </ul>
    </div>
  );
}
