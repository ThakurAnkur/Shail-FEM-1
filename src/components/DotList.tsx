export function DotList ({ selected = 1 }: { selected: number; }) {
    const numbers = [
        { no: 1, title: "Your Info" },
        { no: 2, title: "Select Plan" },
        { no: 3, title: "Add-ons" },
        { no: 4, title: "Summary" },
    ];
    const listItems = numbers.map(({ no, title }) => (
        <li key={no} className={selected === no ? 'active' : ''}>
            <span className='no'>{no}</span>
            <div className='info'>
                <span className="step">STEP {no}</span>
                <p className="title">{title}</p>
            </div>
        </li>));
    return (
        <ul className='dot-list'>
            {listItems}
        </ul>
    );
}
