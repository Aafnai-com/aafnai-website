import { Button, Image, Text, TextInput, Title } from '@mantine/core';
import image from '../../assets/people_on_email.svg';
import classes from "../../styles/components/landingPage/newsletter.module.css";

export function Newsletter() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Wait a minute...</Title>
                <Text fw={500} fz="lg" mb={5}>
                    Subscribe to our newsletter and always be hungry for ideas!
                </Text>
                <Text fz="sm" c="dimmed">
                    You will never miss important offers, product updates, latest news and interesting digital marketing ideas. Our
                    newsletter is once a month, every year.
                </Text>

                <div className={classes.controls}>
                    <TextInput
                        placeholder="Your email"
                        classNames={{ input: classes.input, root: classes.inputWrapper }}
                        radius="md"
                        size="md"
                    />
                    <Button className={classes.control} radius="md" size="md">
                        Subscribe
                    </Button>
                </div>
            </div>
            <Image src={image} className={classes.image} alt="Image of people readdy to get email" />
        </div>
    );
}