// Libraries
import { Dropdown, TrashStroke } from "@willow/ui";

export const basicDropdownSource = `<Dropdown placeholder={"Placeholder"} options={optionsTemp} value={singleValue} 
onChange={handleChangeDropdown} />
`

const optionsTemp = [
    {
        label: "My Account",
        options: [
            {
                label: "Profile",
                iconLeft: TrashStroke,
                action: () => console.log("PROFILE"),
            },
            {
                label: "Billing",
                action: () => console.log("BILLING"),
            },
            {
                label: "Settings",
                action: () => console.log("SETTINGS"),
            },
        ]
    },
    {
        options: [
            {
                label: "Team",
                iconRight: TrashStroke,
                action: () => console.log("TEAM"),
            },
            {
                label: "Invite users",
                options: [
                    {
                        label: "Email",
                        action: () => console.log("EMAIL"),
                    },
                    {
                        label: "Message",
                        action: () => console.log("MESSAGE"),
                    },
                ]
            },
            {
                label: "New Team",
                action: () => console.log("NEW TEAM"),
            },
        ]
    },
    {
        options: [
            {
                label: "Github",
                action: () => console.log("GITHUB"),
            },
            {
                label: "Support",
                action: () => console.log("SUPPORT"),
            },
            {
                label: "API",
                disabled: true,
                action: () => console.log("API"),
            },
        ]
    },
    {
        options: [
            {
                label: "Log out",
                action: () => console.log("LOG OUT"),
            },
        ]
    },
]

export default function BasicDropdown() {
    return (
        <div className="flex gap-5 items-center">
            <Dropdown label={"Dropdown"} icon={TrashStroke} options={optionsTemp} />
        </div>
    )
}