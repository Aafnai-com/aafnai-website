import { useState } from "react";
import { Button, Card, Modal, Stack, Textarea, Text, Tooltip, Group } from "@mantine/core";
import { IconBrandWhatsapp, IconInfoCircle } from "@tabler/icons-react";
import queriesData from "../data/whatsappCustomQueries";

const queries = queriesData.map(item => item.queryValue);

const WhatsAppContactButton = () => {
    const [opened, setOpened] = useState(false);
    const [customMessage, setCustomMessage] = useState("");

    const phone = "9779848001067";

    const handleOpenWhatsApp = (message = "") => {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phone}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };


    // Drag start event
    const handleDragStart = (e, query) => {
        e.dataTransfer.setData("text/plain", query);
    };

    // Drag over event on textarea (allow drop)
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Drop event on textarea
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedText = e.dataTransfer.getData("text/plain");
        setCustomMessage((prev) => (prev ? prev + "\n" + droppedText : droppedText));
    };


    return (
        <>
            {/* Main button in navbar */}
            <Button
                variant="outline"
                className="navbar-yellow-btn"
                color="rgb(255, 255, 0)"
                radius="lg"
                leftSection={<IconBrandWhatsapp stroke={2} size={20} />}
                onClick={() => setOpened(true)}
            >
                Contact Us
            </Button>

            {/* Modal */}
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                transitionProps={{ transition: "slide-up" }}
                title="Chat with Aafnai Ads"
            >
                <Stack gap="md">
                    {/* Open WhatsApp directly */}
                    <Button
                        component="a"
                        href={`https://wa.me/${phone}`}
                        target="_blank"
                        color="green"
                        leftSection={<IconBrandWhatsapp size={20} stroke={2} />}
                    >
                        Open WhatsApp
                    </Button>

                    <Text weight={700}>Or drag and drop most frequently asked queries below to customize your message:</Text>

                    <Stack
                        spacing="sm"
                        style={{
                            maxHeight: 300,             // visible height
                            overflowY: "auto",          // vertical scrolling
                            paddingRight: 4,            // space for scrollbar
                        }}
                        className="whatsAppContactButton-popup-dragable-card-scrollbar"
                    >
                        {queries.slice(0, 9).map((query, index) => (
                            <Card
                                key={index}
                                shadow="sm"
                                p="sm"
                                style={{
                                    cursor: "grab",
                                    transition: "transform 0.15s, box-shadow 0.15s",
                                    // height: 200,           // fixed height
                                    display: "flex",
                                    alignItems: "center", // vertically center text
                                    justifyContent: "center",
                                    minHeight: 80


                                }}
                                draggable
                                onDragStart={(e) => handleDragStart(e, query)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.02)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
                                }}
                            >
                                <Text>{query}</Text>
                            </Card>
                        ))}
                    </Stack>



                    <Group spacing="xs" align="center">
                        <Text weight={700}>Your Message:</Text>

                        <Tooltip
                            label="Drag the queries above into the text area below."
                            withArrow
                            position="right"
                            color="gray"
                            multiline
                            width={200}
                        >
                            <IconInfoCircle size={18} style={{ cursor: "pointer" }} />
                        </Tooltip>
                    </Group>

                    <Textarea
                        placeholder="Drop your query here..."
                        value={customMessage}
                        onChange={
                            (e) => {
                                setCustomMessage(e.target.value);
                            }}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        autosize
                        minRows={5}
                    />

                    <Button
                        color="green"
                        onClick={() => handleOpenWhatsApp(customMessage)}
                    >
                        Send Your Message
                    </Button>
                </Stack>
            </Modal>



            {/* <Stack spacing="md" style={{ maxWidth: 500, margin: "auto", marginTop: 50 }}>
                
            </Stack> */}

        </>
    );
};

export default WhatsAppContactButton;
